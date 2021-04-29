import axios from 'axios';
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
} from './phonebook-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = newContact => async dispatch => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', { ...newContact });
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const delContact = contactId => async dispatch => {
  dispatch(delContactRequest());
  try {
    axios.delete(`/contacts/${contactId}`);
    dispatch(delContactSuccess(contactId));
  } catch (error) {
    dispatch(delContactError(error));
  }
};

// eslint-disable-next-line
 export default { fetchContacts, addContact, delContact }; 