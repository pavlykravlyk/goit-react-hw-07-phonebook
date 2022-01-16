import './App.css';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import ContactList from './pages/ContactList';
import ContactForm from 'pages/ContactForm/ContactForm';
import Filter from './pages/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <main className="App">
      <Container>
        <Section>
          <h1 className="Title">Phonebook</h1>
          <ContactForm />
        </Section>
        <Section>
          <h2 className="Title">Contacts</h2>
          <Filter />
          <ContactList />
        </Section>
      </Container>

      <ToastContainer autoClose={3000} />
    </main>
  );
}
