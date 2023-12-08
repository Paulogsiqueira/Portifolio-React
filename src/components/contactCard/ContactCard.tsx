import { contact } from '@/interface/contactInterface'
import '@/styles/contactCard/ContactCard.sass'

interface ContactCardProps {
    contact: contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {

    return (
        <div className="contact-card">
            <a href={contact.href}>
                <div className='contact-card__img'>
                    <img src={contact.img} alt={contact.title} />

                </div>
                <h4>{contact.title}</h4>
                <p>{contact.subtitle}</p>
            </a>
        </div>
    );
};

export default ContactCard;