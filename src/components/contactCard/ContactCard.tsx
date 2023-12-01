import '@/styles/contactCard/ContactCard.sass'
import {contact} from '@/interface/contactInterface'

interface ContactCardProps {
    contact: contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {

    return (
        <div className="contact-card">
            <div className='contact-card__img'>
                <img src={contact.img} alt={contact.title} />

            </div>
            <h4>{contact.title}</h4>
            <p>{contact.subtitle}</p>
        </div>
    );
};

export default ContactCard;