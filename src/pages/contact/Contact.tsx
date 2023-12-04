import ContactCard from '@/components/contactCard/ContactCard'
import '@/styles/contact/Contact.sass'
import {contact} from '@/interface/contactInterface'
import {contacts} from '@/data/contact/contactsData'


interface ContactsProps {
}

const Contacts: React.FC<ContactsProps> = () => {

  return (
    <div className='contact' id="contact">
      <h2>Contatos</h2>
      <div className='contact-list'>
        {contacts.map((contact: contact, index: number) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;