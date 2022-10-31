import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact, setCurrent } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setState(current);
    } else {
      setState({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const [contact, setState] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setState({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current !== null){
        setCurrent(contact);
        updateContact(contact);
    } else {
        addContact(contact);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>{current !== null ? "Edit Contact" : "Add Contact"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={onChange}
        value={email}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={onChange}
        value={phone}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        onChange={onChange}
        checked={type === "personal"}
      />{" "}
      Personal &nbsp;
      <input
        type="radio"
        name="type"
        value="professional"
        onChange={onChange}
        checked={type === "professional"}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          className="btn btn-success btn-block"
          value={current !== null ? "Edit Contact" : "Add Contact"}
        />
        {current && (
          <button
            className="btn btn-light btn-block"
            onClick={() => clearCurrent()}
          >
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
