import React, {useState} from "react";
import ContactMe from './ContactMe';
import ContactMeList from './ContactMeList'

export default function ContactMeDetails() {
    const [newContact,setNewCotact] = useState({});
    const handleChange = ({target}) => {
        const {name, value} = target;
        setNewCotact((prev) => ({...prev,id: Date.now(), [name]:value}));
    };

    const [allContact,setAllContact] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newContact.message) return;
        setAllContact((prev) => [newContact, ...prev]);
        setNewCotact({});
    };
    const handleDelete = (contactId) => {
        setAllContact((prev) => prev.filter(
            (contact) => contact.id !==contactId
        ));
    };

    return (
        <main>
            <ContactMe 
                newContact={newContact}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <ContactMeList allContacts={allContact} handleDelete={handleDelete}/>
        </main>
    )
}