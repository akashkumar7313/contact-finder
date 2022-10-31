import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';
const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');
  useEffect(() => {
    if(contactContext.filtered === null){
        text.current.value = '';
    }
  })
  const onChange = e => {
    if(text.current.value !== '') {
        contactContext.filterContacts(e.target.value);
    } else {
        contactContext.clearFilter();
    }
  }
  return (
    <div>
        <input type='text' ref={text} placeholder='Filter Contacts...' name='text' onChange={onChange}/>
    </div>
  )
}

export default ContactFilter
