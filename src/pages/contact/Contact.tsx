import {contact} from '@/interface/contactInterface'
import {contacts} from '@/data/contact/contactsData'
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react';
import ContactCard from '@/components/contactCard/ContactCard'
import '@/styles/contact/Contact.sass'


interface ContactsProps {
}

const Contacts: React.FC<ContactsProps> = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.div className='contact' id="contact" ref={ref} animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 150 }} transition={{duration:1}}>
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