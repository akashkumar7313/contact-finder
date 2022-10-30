import React, { useContext, useState } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact } = contactContext;
  const [contact, setState] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });  

  const onChange = e => {
    setState({
        ...contact,
        [e.target.name]: e.target.value 
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>Add Contact</h2>
      <input type="text" name="name" placeholder="Name" onChange={onChange} />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={onChange}
      />
      <input type="text" name="phone" placeholder="Phone" onChange={onChange} />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        onChange={onChange}
      />{" "}
      Personal &nbsp;
      <input
        type="radio"
        name="type"
        value="professional"
        onChange={onChange}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          className="btn btn-success btn-block"
          value="Add Contact"
        />
      </div>
    </form>
  );
};

export default ContactForm;
