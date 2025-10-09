import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
export const Contacts = () => {
    const { store, dispatch } = useGlobalReducer()
    // function fetchContacts() {
    //     fetch("https://playground.4geeks.com/contact/agendas/FreeWILL/contacts")
    //         .then((response) => response.json())
    //         .then((body) => {
    //             dispatch({
    //                 type: "set_contacts",
    //                 payload: body.contacts
    //             })
    //         })
    // }
        function fetchContacts() {
        fetch("https://playground.4geeks.com/contact/agendas/FreeWILL/contacts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch contacts");
                }
                return response.json();
            })
            .then((body) => {
                if (Array.isArray(body.contacts)) {
                    dispatch({
                        type: "set_contacts",
                        payload: body.contacts
                    });
                } else {
                    console.warn("No contacts found in response");
                    dispatch({
                        type: "set_contacts",
                        payload: []
                    });
                }
            })
            .catch((error) => {
                console.error("Error fetching contacts:", error);
                dispatch({
                    type: "set_contacts",
                    payload: []
                });
            });
    }
    useEffect(() => {
        fetchContacts()
    }, [])
    return (
        <div className="container">
            <div className="d-flex flex-column">
                {/* {store.contacts.map((contact) => {
                    return (
                        <ContactCard name={contact.name} phone={contact.phone} email={contact.email} address={contact.address}/>
                    )
                })} */}
                 {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
                    store.contacts.map((contact) => (
                        <ContactCard
                            key={contact.id || contact.email} // use a unique key
                            name={contact.name}
                            phone={contact.phone}
                            email={contact.email}
                            address={contact.address}
                        />
                    ))
                ) : (
                    <p>No contacts found.</p>
                )}
            </div>
        </div>
    )}