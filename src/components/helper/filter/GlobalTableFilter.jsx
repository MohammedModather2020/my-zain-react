import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

export default function GlobalTableFilter({ filter, setFilter }) {
  return (
    <div className='row mb-3'>
      <div className='col-md-4 align-self-center'>
        <span className='text-muted'>Enter word to search:</span>{' '}
      </div>
      <div className='col-md-8 search-global'>
        <input
          className='form-control rounded-50'
          type='text'
          inputMode='search'
          placeholder='Search....'
          value={filter || ''}
          onChange={(e) => {
            setFilter(e.target.value.trim() || undefined);
          }}
        />
        <FaSearch color='#8080802b' />
      </div>
    </div>
  );
}

GlobalTableFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
