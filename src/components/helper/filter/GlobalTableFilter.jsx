import PropTypes from 'prop-types';
import { useAsyncDebounce } from 'react-table';
import { FaSearch } from 'react-icons/fa';

export default function GlobalTableFilter({ filter, setFilter }) {
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 100);

  return (
    <div className='row mb-3'>
      <div className='col-md-5 align-self-center'>
        <span className='text-muted h4'>Enter word to search:</span>{' '}
      </div>
      <div className='col-md-7 search-global'>
        <input
          className='form-control rounded-3'
          type='text'
          inputMode='search'
          placeholder='Search....'
          value={filter || ''}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <FaSearch color='#8080802b' />
      </div>
    </div>
  );
}
GlobalTableFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.string.isRequired,
};
