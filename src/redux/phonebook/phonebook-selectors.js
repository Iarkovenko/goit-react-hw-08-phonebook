import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phonebook.loading;

const getFilter = state => state.phonebook.filter;

const getContacts = state => state.phonebook.contacts;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
// eslint-disable-next-line
export default { getLoading, getFilter, getVisibleContacts};