import { useSelector } from 'react-redux';
import { useGetAllContactsQuery } from 'redux/contactSlice';
import ContactListItem from './ContactListItem';
import styles from './ContactsList.module.css';

const getFilteredContacts = (allContacts, filterValue) => {
  const normalizedFilter = filterValue.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

export default function ContactList() {
  const {
    data: contacts,
    isError,
    isFetching,
    isLoading,
    isSuccess,
  } = useGetAllContactsQuery();

  const filteredContacts = useSelector(
    ({ contactFilter }) =>
      isSuccess && getFilteredContacts(contacts, contactFilter),
  );

  return (
    isSuccess && (
      <ul className={styles.List}>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
      </ul>
    )
  );
}
