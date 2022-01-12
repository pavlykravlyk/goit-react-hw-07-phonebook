import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactActions from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

export default function Filter() {
  // const contactName = useSelector(getFilter);
  // const dispatch = useDispatch();

  return (
    <label className={styles.Label} htmlFor="">
      Find contacts by name
      <input
        className={styles.Input}
        type="text"
        // value={contactName}
        // onChange={event =>
        //   // dispatch(contactActions.findContactsByName(event.target.value))
        // }
      />
    </label>
  );
}

// Filter.propTypes = {
//   contactName: PropTypes.string.isRequired,
//   onFindContact: PropTypes.func.isRequired,
// };
