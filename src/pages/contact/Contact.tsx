import ContactCard from '@/components/contactCard/ContactCard'
import '@/styles/contact/Contact.sass'
import {contact} from '@/interface/contactInterface'
import {contacts} from '@/data/contact/contactsData'
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react';


interface ContactsProps {
}

const Contacts: React.FC<ContactsProps> = () => {

  return (
    <motion.div className='contact' id="contact">
      <h2>Contatos</h2>
      <div className='contact-list'>
        {contacts.map((contact: contact, index: number) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </motion.div>
  );
};

export default Contacts;