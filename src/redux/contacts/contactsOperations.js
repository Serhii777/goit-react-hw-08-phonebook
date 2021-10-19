import axios from "axios";
import contactsActions from "./contactsActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

axios.defaults.headers.post["Content-Type"] = "application/json";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactError(error)));
};

const toggleCompleted = (id) => (dispatch) => {
  dispatch(contactsActions.toggleCompletedRequest());
  axios
    .patch(`/contacts/${id}`, { completed: true })
    .then(({ data }) => dispatch(contactsActions.toggleCompletedSuccess(id)))
    .catch((error) => dispatch(contactsActions.toggleCompletedError(error)));
};

export default {
  addContact,
  fetchContacts,
  removeContact,
  toggleCompleted
};
