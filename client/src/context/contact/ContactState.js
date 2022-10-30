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
  FILTER_CONTACT,
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
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  
  // Delete Contact
  
  // Set current contact
  
  // Clear current contact
  
  // Update Contact

  // Filter Contacts
  
  // Clear Filters

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
