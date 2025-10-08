import React, { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useNavigate } from "react-router-dom"

export const AddNewContact = () => {
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const [contactName, setContactName] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [contactPhone, setContactPhone] = useState("")
    const [contactAddress, setContactAddress] = useState("")
    function postContact(contactData) {
        if (contactData.name=="") return
        if (contactData.email=="") return
        if (contactData.phone =="") return
        if (contactData.address=="") return
        
        fetch("https://playground.4geeks.com/contact/agendas/FreeWILL/contacts", {
            method: "POST",
            body: JSON.stringify(contactData),
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => {
                if (response.ok) {
                    navigate("/")
                }
            })
    }
    return (
        <div className="container">
            <div className="d-flex flex-colomn">
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Full Name</label>
                        <input value= {contactName} onChange={(e)=> setContactName(e.target.value)} type="name" className="form-control" id="name" aria-describedby="name"/>
                    
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input value= {contactEmail} onChange={(e)=> setContactEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="email"/>
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone</label>
                        <input  value= {contactPhone} onChange={(e)=> setContactPhone(e.target.value)} type="phone" className="form-control" id="phone" aria-describedby="phone"/>
                    </div>
                    <div className="mb-3">
                        <label for="address" className="form-label">Address</label>
                        <input  value= {contactAddress} onChange={(e)=> setContactAddress(e.target.value)} type="address" className="form-control" id="address" aria-describedby="address"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Favorites</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e)=> postContact({
                        name: contactName,
                        email: contactEmail,
                        phone: contactPhone,
                        address: contactAddress

                    })}>Add Contact</button>
                </form>
            </div>
        </div>
    )
}