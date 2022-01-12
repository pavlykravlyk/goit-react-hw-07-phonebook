import axios from 'axios';
import { createAction, nanoid } from '@reduxjs/toolkit';

axios.defaults.BaseURL = 'https://61dc82a1591c3a0017e1a9c0.mockapi.io/api/v1/';

const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch({ type: 'contacts/addContactRequest' });

  axios
    .post('./contacts', contact)
    .then(({ data }) => dispatch({ type: 'contacts/ ', payload: data }))
    .catch(error =>
      dispatch({ type: 'contacts/addContactError', payload: error }),
    );
};

// const addContact = createAction('contacts/addContact', (name, number) => ({
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// }));

const deleteContact = createAction('contacts/deleteContact');

const findContactsByName = createAction('contacts/findContactByName');

const contactActions = { addContact, deleteContact, findContactsByName };

export default contactActions;
