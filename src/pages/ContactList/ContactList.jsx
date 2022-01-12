import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactSlice';
// import contactActions from 'redux/contacts/contacts-actions';
// import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import Button from 'components/Button/Button';
import styles from './ContactsList.module.css';

export default function ContactList() {
  // console.log(useGetAllContactsQuery());
  // const contacts = useSelector(getFilteredContacts);
  const {
    // currentData,
    data: contacts,
    // endpointName,
    // fulfilledTimeStamp,
    isError,
    isFetching,
    // isLoading,
    isSuccess,
    // isUninitialized,
    // refetch,
    // requestId,
    // startedTimeStamp,
    // status,
  } = useGetAllContactsQuery();

  const [
    deleteContact,
    {
      //   isError,
      isLoading: isDeleting,
      //   isSuccess,
      //   isUninitialized,
      //   originalArgs,
      //   reset,
      //   status,
    },
  ] = useDeleteContactMutation();
  // console.log(useDeleteContactMutation());
  // const dispatch = useDispatch();

  // console.log(contacts);

  return (
    isSuccess && (
      <ul className={styles.List}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.Item}>
            <p className={styles.Name}>{name}:</p>
            <p className={styles.Number}>{number}</p>
            <Button
              title={isDeleting ? 'Deleting...' : 'Delete'}
              // onClick={() => dispatch(contactActions.deleteContact(id))}
              onClick={() => deleteContact(id)}
            />
          </li>
        ))}
      </ul>
    )
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};
