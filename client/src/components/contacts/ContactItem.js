import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({contact}) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact } = contactContext;
  const { id, name, email, phone, type } = contact;

  return (
    <Fragment>
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}
                <span style={{float: 'right'}} className={'badge text-capitalize '+(type === 'personal' ? 'badge-primary' : 'badge-success')}>
                    {type}
                </span>
            </h3>
            <ul>
                {email && <li><i className='fas fa-envelope'></i> {email}</li>}
                {phone && <li><i className='fas fa-phone'></i> {phone}</li>}
            </ul>
            <p>
                <button className='btn btn-dark btn-sm'>Edit</button>
                <button className='btn btn-danger btn-sm' onClick={() => deleteContact(contact.id)}>Delete</button>
                <button className='btn btn-primary btn-sm'>Share</button>
            </p>
        </div>
    </Fragment>
  )
}
ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}
export default ContactItem