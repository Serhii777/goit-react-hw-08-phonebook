import React, { Component } from "react";
import { connect } from "react-redux";

import ContactForm from "../ContactForm/ContactForm.container";
import ContactList from "../ContactList/ContactList.container";
import Filter from "../Filter/Filter.container";
import Alert from "../Alert";

import { contactsActions, contactsOperations } from "../../redux/contacts";

import { CSSTransition } from "react-transition-group";
import fadeAlert from "../Animation/FadeAlert.module.css";
import fadeItems from "../Animation/FadeItems.module.css";

class Contacts extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { newContactUnique } = this.props;

    return (
      <>
        <ContactForm />

        <CSSTransition
          in={newContactUnique}
          appear
          timeout={300}
          classNames={fadeAlert}
          unmountOnExit>
          <Alert
            newContactUnique={newContactUnique.name}
            timeout={this.props.onResetNewContactUnique}
          />
        </CSSTransition>

        <Filter />

        <CSSTransition
          in={true}
          timeout={300}
          classNames={fadeItems}
          unmountOnExit>
          <ContactList />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  newContactUnique: state.contacts.newContactUnique,
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
  onResetNewContactUnique: contactsActions.resetNewContactUnique,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
