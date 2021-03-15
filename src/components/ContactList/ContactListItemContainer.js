import { connect } from "react-redux";
import ContactListItem from "./ContactListItem";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const mapStateToProps = (state, ownProps) => {
console.log("stateListItemCont:", state);

  const contactListItem = contactsSelectors.getContactById(state, ownProps.id);

console.log("contactListItem:", contactListItem);

  return {
    ...contactListItem,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(contactsOperations.removeContact(ownProps.id)),

  onToggleCompleted: () =>
    dispatch(contactsOperations.toggleCompleted(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
