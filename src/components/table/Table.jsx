import React, { Fragment } from 'react';
import { matchSorter } from 'match-sorter';
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { MdArrowDownward, MdArrowUpward, MdSwapVert } from 'react-icons/md';
import GlobalTableFilter from '../helper/filter/GlobalTableFilter';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { DefaultColumnFilter } from '../helper/filter/DefaultColumnFilter';

export default function Table({
  columns,
  data = [],
  activePage,
  setActivePage,
  limitPage,
  total,
  setLimitPage,
}) {
  // ----------------------------------------------------------------------------------->
  function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
  }
  // ----------------------------------------------------------------------------------->
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    [],
  );
  // ----------------------------------------------------------------------------------->
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    [],
  );
  // ----------------------------------------------------------------------------------->
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { pageIndex, pageSize, globalFilter } = state;
  return (
    <div className='table-responsive p-3'>
      {data?.length > 0 ? (
        <Fragment>
          <div className='row align-items-start mb-2'>
            <div className='col-md-5'>
              <GlobalTableFilter
                filter={globalFilter}
                setFilter={setGlobalFilter}
              />
            </div>
            <div
              {...getTableProps()}
              className='col-md-7'
              style={{ marginTop: '-20px' }}
            >
              {headerGroups.map((headerGroup, index) => (
                <div
                  key={index}
                  className='row align-items-baseline'
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map(
                    (column, index) =>
                      column.canFilter && (
                        <div className='col-md-4 mb-2 mb-md-0' key={index}>
                          <div className='title-filter'>
                            {column.render('Header')}
                          </div>
                          {column.canFilter ? column.render('Filter') : null}
                        </div>
                      ),
                  )}
                </div>
              ))}
            </div>
          </div>
          <table
            {...getTableProps()}
            className='table card-table table-vcenter text-nowrap border my-0'
            id='dataTableHover'
          >
            <thead className='thead-light'>
              {headerGroups?.map((headerGroup, index) => (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      key={index}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      {column.id !== 'id' && (
                        <>
                          <MdSwapVert />
                          <span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <MdArrowDownward />
                              ) : (
                                <MdArrowUpward />
                              )
                            ) : (
                              ''
                            )}
                          </span>
                        </>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {page?.length > 0 && (
              <tbody {...getTableBodyProps()}>
                {page.map((row, index) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={index}>
                      {row.cells.map((cell, index) => (
                        <td key={index} {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
          <div className='row mt-2 align-items-center'>
            <div className='col-md-2'>
              <span>
                Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions?.length}
                </strong>{' '}
              </span>
            </div>
            <div className='col-md-5 text-right d-flex align-items-center justify-content-between my-2 my-md-0'>
              <span>
                Go to:{' '}
                <input
                  type='text'
                  className='form-control d-inline-block mr-1 text-center py-2'
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                  style={{ width: '70px' }}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                  }}
                />
              </span>
              <select
                className='form-control d-inline-block py-1'
                value={pageSize}
                style={{ width: '150px' }}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[10, 25, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <div className='pagination col-md-5 text-md-right justify-content-end'>
              <button
                className='page-link page-item active rounded'
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <FiChevronsLeft />
              </button>
              <button
                className='btn btn-light btn-pill me-3'
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Prev
              </button>
              <button
                className='btn btn-light btn-pill'
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </button>
              <button
                className='page-link page-item active rounded'
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <FiChevronsRight />
              </button>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className='text-danger text-center'>No data found</div>
      )}
    </div>
  );
}