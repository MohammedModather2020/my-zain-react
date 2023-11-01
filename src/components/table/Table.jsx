import PropTypes from 'prop-types';
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
import { DefaultColumnFilter } from '../helper/filter/DefaultColumnFilter';
import Pagination from 'react-js-pagination';

export default function Table({ columns, data }) {
  // ----------------------------------------------------------------------------------->
  function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
  }
  // ----------------------------------------------------------------------------------->
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    [],
  );
  // ----------------------------------------------------------------------------------->
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
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
    pageOptions,
    state: { pageIndex, pageSize, globalFilter },
    gotoPage,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      initialState: { pageSize: 5, pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );
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
                        <Fragment>
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
                        </Fragment>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {page?.length > 0 && (
              <tbody {...getTableBodyProps()}>
                {page?.map((row, index) => {
                  prepareRow(row);
                  return (
                    <tr {...row?.getRowProps()} key={index}>
                      {row?.cells?.map((cell, index) => (
                        <td key={index} {...cell?.getCellProps()}>
                          {cell?.render('Cell')}
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
                defaultValue={pageSize}
                style={{ width: '150px' }}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[5, 10, 25, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <div className='pagination col-12 col-md-5 text-md-end justify-content-end'>
              <Pagination
                activePage={pageIndex + 1}
                itemsCountPerPage={5}
                totalItemsCount={data?.length}
                pageRangeDisplayed={7}
                itemClass='page-item'
                linkClass='page-link'
                onChange={(count) => gotoPage(count ? Number(count) - 1 : 0)}
              />
            </div>
          </div>
        </Fragment>
      ) : (
        <div className='text-danger text-center'>No data found</div>
      )}
    </div>
  );
}

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};
