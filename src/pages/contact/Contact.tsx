import ContactCard from '@/components/contactCard/ContactCard'
import '@/styles/contact/Contact.sass'

interface Contact {
  title: string;
  subtitle: string;
  img: string;

}

interface ContactsProps {
}

const Contacts: React.FC<ContactsProps> = () => {
  const contacts: Contact[] = [
    { title: 'E-mail', subtitle:'pgustavo-siqueira@hotmail.com', img: '/public/Contacts/email.png' },
    { title: 'Telefone', subtitle:'(11) 99782-0009', img: '/public/Contacts/whatsapp.png' },
    { title: 'LinkedIn', subtitle:'@paulo-gustavo-siqueira-48994916a', img: '/public/Contacts/linkedin.png' },
    { title: 'E-mail', subtitle:'@Paulogsiqueira', img: '/public/Contacts/github.png' },

  ];

  return (
    <div className='contact'>
      <h2>Contatos</h2>
      <div className='contact-list'>
        {contacts.map((contact: Contact, index: number) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;