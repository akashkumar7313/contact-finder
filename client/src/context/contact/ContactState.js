import React, { useReducer } from "react";
import * as uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jack",
        email: "test@test.com",
        phone: "1234567890",
        type: "personal",
      },
      {
        id: 2,
        name: "John",
        email: "testJohn@test.com",
        phone: "1234567890",
        type: "personal",
      },
      {
        id: 3,
        name: "James",
        email: "testjames@test.com",
        phone: "1234567890",
        type: "professional",
      },
      {
        id: 4,
        name: "Jasper",
        email: "testJasper@test.com",
        phone: "1234567890",
        type: "personal",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({
        type: ADD_CONTACT,
        payload: contact
    });
  }
  // Delete Contact
  const deleteContact = id => {
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    });
  }
  // Set current contact
  const setCurrent = contact => {
    dispatch({
        type: SET_CURRENT,
        payload: contact
    });
  }
  // Clear current contact
  const clearCurrent = () => {
    dispatch({
        type: CLEAR_CURRENT 
    });
  }
  // Update Contact
  const updateContact = contact => {
    dispatch({
        type: UPDATE_CONTACT,
        payload: contact
    });
  }
  // Filter Contacts
  const filterContacts = text => {
    dispatch({
        type: FILTER_CONTACTS,
        payload: text
    })
  }
  // Clear Filters
  const clearFilter = () => {
    dispatch({
        type: CLEAR_FILTER
    });
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
