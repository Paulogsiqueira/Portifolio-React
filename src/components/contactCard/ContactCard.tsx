import '@/styles/contactCard/ContactCard.sass'

interface Contact {
    title: string;
    subtitle: string;
    img: string;

}

interface ContactCardProps {
    contact: Contact;
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