import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import initContacts from '../../initContacts.json';

const items = createReducer(initContacts, {
  addContactSuccess: (state, { payload }) =>
    state.some(contact => payload.name === contact.name)
      ? alert(`${payload.name} is already in contacts`)
      : [...state, payload],

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.findContactsByName]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
