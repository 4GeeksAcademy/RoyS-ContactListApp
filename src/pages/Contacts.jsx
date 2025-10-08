import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";

export const Contacts = () => {
    const { store, dispatch } = useGlobalReducer()
    function fetchContacts() {
        fetch("https://playground.4geeks.com/contact/agendas/FreeWILL/contacts")
            .then((response) => response.json())
            .then((body) => {
                dispatch({
                    type: "set_contacts",
                    payload: body.contacts
                })
            })
    }
    useEffect(() => {
        fetchContacts()
    }, [])
    return (
        <div className="container">
            <div className="d-flex flex-column">
                {store.contacts.map((contact) => {
                    return (
                        <ContactCard name={contact.name} phone={contact.phone} email={contact.email} address={contact.address}/>
                    )
                })}
            </div>

        </div>
    )
}

// create add new contact button, this button needs to direct you to the new contact page. this will be a NEW FILE under "pages"
// get a edit contact button on the contact cards, this button needs to direct you to a edit contact page, that needs to be created in the "pages". 
// lines 34-35 can be done using the store.. reference the fetch contacts function for how to write the functions and how to implement the store
// create a delete contact button on the cards, requires the id. 
// lines 34-35 will have the function for creating a contact that will live in the new page created

