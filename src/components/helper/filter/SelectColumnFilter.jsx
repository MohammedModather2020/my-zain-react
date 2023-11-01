import React from 'react';
import PropTypes from 'prop-types';
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      className='form-control'
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value=''>All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option === 0 || option === 1
            ? option === 0
              ? 'inactive'
              : 'active'
            : option}
        </option>
      ))}
    </select>
  );
}
SelectColumnFilter.propTypes = {
  column: PropTypes.object,
};
