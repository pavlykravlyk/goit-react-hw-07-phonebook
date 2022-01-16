// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactSlice';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const contactName = useSelector(({ filter }) => filter);

  return (
    <label className={styles.Label} htmlFor="">
      Find contacts by name
      <input
        className={styles.Input}
        type="text"
        value={contactName}
        onChange={({ target: { value } }) => dispatch(changeFilter(value))}
      />
    </label>
  );
}

// Filter.propTypes = {
//   contactName: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };
