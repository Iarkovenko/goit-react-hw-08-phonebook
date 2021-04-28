import { createAction } from '@reduxjs/toolkit';
  
export const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');
export const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');
export const fetchContactsError = createAction('phonebook/fetchContactsError');

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

export const delContactRequest = createAction('phonebook/delContactRequest');
export const delContactSuccess = createAction('phonebook/delContactSuccess');
export const delContactError = createAction('phonebook/delContactError');

export const filter = createAction('phonebook/filter');


