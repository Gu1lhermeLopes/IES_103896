import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactService from "../services/ContactService";
import Contact from "./rows/Contact";

const ContactList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await ContactService.getContacts();
            setContacts(response.data);
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      }, []);
    

      const deleteContact = (e, id) => {
        e.preventDefault();
        ContactService.deleteContact(id).then((res) => {
          if (contacts) {
            setContacts((prevElement) => {
              return prevElement.filter((contact) => contact.id !== id);
            });
          }
        });
      };




    
   
      return (
        <div className="container mx-auto my-8">
          <div className="h-12">
            <button
              onClick={() => navigate("/contacts/add")}
              className="rounded-full bg-gradient-to-r from-fuchsia-600 to-rose-500 hover:bg-gradient-to-bl text-white px-6 py-2 font-semibold absolute right-5">
              Add Contact
            </button>
            <button
              onClick={() => navigate("/")}
              className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:bg-gradient-to-bl text-white px-6 py-2 font-semibold ml-5 mr-20">
              Meetings
            </button>
          </div>
          <div className="h-16 px-8 flex items-center">
            <p className="text-sky-500 font-bold">Contacts</p>
          </div>
          
          <div className="flex shadow border-b">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Name
                  </th>
                  <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Email
                  </th>
                  <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Actions
                  </th>
                </tr>
              </thead>
              {!loading && (
                <tbody className="bg-white">
                  {contacts.map((contact) => (
                    <Contact
                      contact={contact}
                      deleteContact={deleteContact}
                      key={contact.id}></Contact>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      );
    

}

export default ContactList