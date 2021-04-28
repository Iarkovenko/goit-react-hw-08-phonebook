import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  filter,
} from './phonebook-actions';

const contactsReducers = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) =>
    state.find(contact => contact.name === payload.name)
      ? alert(`${payload.name} is already in contacts`)
      : [payload, ...state],
  [delContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [delContactRequest]: () => true,
  [delContactSuccess]: () => false,
  [delContactError]: () => false,
});

const filterReducers = createReducer('', {
  [filter]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducers,
  filter: filterReducers,
  loading: loadingReducer,
});

export default phonebookReducer;
