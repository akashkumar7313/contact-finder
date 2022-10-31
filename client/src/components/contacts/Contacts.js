import React, { Fragment, useContext } from 'react'
import ContactItem from './ContactItem'
import ContactContext from '../../context/contact/contactContext'
import ContactFilter from './ContactFilter';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  return (
    <Fragment>
        <ContactFilter/>
        { filtered !== null ? filtered.map(contact => {
            return <ContactItem contact={contact} key={contact.id}/>
        }) : contacts.map(contact => {
            return <ContactItem contact={contact} key={contact.id}/>
        })}
    </Fragment>
  )
}

export default Contacts