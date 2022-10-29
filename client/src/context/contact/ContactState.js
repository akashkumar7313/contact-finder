import React, { useReducer, userReducer } from "react";
import uuid from 'uuid';
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

const ContactState = () => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jack',
                email: 'test@test.com',
                phone: '1234567890',
                type: 'personal',
            },
            {
                id: 2,
                name: 'John',
                email: 'testJohn@test.com',
                phone: '1234567890',
                type: 'personal',
            },
            {
                id: 3,
                name: 'James',
                email: 'testjames@test.com',
                phone: '1234567890',
                type: 'personal',
            },
            {
                id: 4,
                name: 'Jasper',
                email: 'testJasper@test.com',
                phone: '1234567890',
                type: 'personal',
            }
        ]
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);

    return (
        <contactContext.provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </contactContext.provider>  
    );
}
