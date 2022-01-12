import PropTypes from 'prop-types';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useCreateNewContactMutation } from 'redux/contacts/contactSlice';
import actions from 'redux/contacts/contacts-actions';
import FORM_CONFIG from 'formConfig';
import styles from './ContactForm.module.css';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const [
  //   createNewContact,
  //   {
  //     isError,
  //     isLoading,
  //     isSuccess,
  //     isUninitialized,
  //     originalArgs,
  //     reset,
  //     status,
  //   },
  // ] = useCreateNewContactMutation();

  // console.log(useCreateNewContactMutation());

  const handleInputChange = ({ target: { name, value } }) => {
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  };

  // const dispatch = useDispatch();

  const handleFormSubmit = event => {
    event.preventDefault();
    // createNewContact(name, number);
    // name && number !== '' && dispatch(actions.addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.Form}>
      <ul className={styles.List}>
        {FORM_CONFIG.map(field => (
          <li key={field.name} className={styles.Item}>
            <label className={styles.Label}>
              {field.name}
              <input
                className={styles.Input}
                type={field.type}
                name={field.name}
                pattern={field.pattern}
                title={field.title}
                value={{ name, number }[field.name]}
                onChange={handleInputChange}
                required
              />
            </label>
          </li>
        ))}
      </ul>

      <button type="submit" className={styles.Btn}>
        add contact
      </button>
    </form>
  );
}

FORM_CONFIG.PropTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
