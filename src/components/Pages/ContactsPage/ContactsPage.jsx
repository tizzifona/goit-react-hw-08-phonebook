import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './ContactsPage.module.css';
import ContactForm from '../../ContactForm';
import Filter from '../../Filter';
import ContactList from '../../ContactList';
import { fetchContacts } from '../../Redux/Contacts/contactsSlice';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className={css.mainContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
};

export default ContactsPage;
