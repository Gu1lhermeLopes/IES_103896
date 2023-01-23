import React, { useState } from 'react'
import ContactService from '../services/ContactService';
import { useNavigate } from "react-router-dom";



const AddContact = () => {
    const navigate = useNavigate();
    const [contact, setContact] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setContact({ ...contact, [e.target.name]: value });
    };

    const saveContact = (e) => {
        e.preventDefault();
        if (contact.name==""  || contact.email=="") { 
            console.log("error");
            alert ("Missing fields");  
        }else{
            ContactService.saveContact(contact)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
            navigate(`/contacts`);

        }

      };
  
    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Add New Contact</h1>
                </div> 

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-sm font-normal">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={contact.name}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border rounded-lg mt-2 px-2 py-2"></input>
                </div> 

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-sm font-normal">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={contact.email} 
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border rounded-lg mt-2 px-2 py-2"></input>
                </div> 

                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        onClick={saveContact}
                        className="rounded-full text-white font-semibold bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br py-2 px-6">
                        Save
                    </button>
                    <button
                        onClick={() => navigate("/contacts")}
                        className="rounded-full text-white font-semibold bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br py-2 px-6">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
  )
}

export default AddContact