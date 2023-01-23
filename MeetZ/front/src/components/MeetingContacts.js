import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MeetingService from "../services/MeetingService";
import ContactMr from "./rows/ContactMr";

const MeetingContacts = () => {
  const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await MeetingService.getMeetingContactsById(id);
            setContacts(response.data);
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      }, []);
    

      const removeContact = (e, idc) => {
        e.preventDefault();
        console.log()
        console.log(id)
        MeetingService.removeContact(id,idc);
        window.location.reload(false);
      };

      const back = (e) => {
        e.preventDefault();
        navigate(`/meetings/${id}`);
      };
      const add = (e) => {
        e.preventDefault();
        navigate(`/meetings/${id}/a`);
      };

      return (
        <div className="container mx-auto my-8">
          <div className="h-12">

          <button
              onClick={back}
              className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:bg-gradient-to-bl text-white px-6 py-2 font-semibold ml-5 mr-20">
              Back
          </button>
          <button
              onClick={add}
              className="rounded-full bg-gradient-to-r from-fuchsia-600 to-rose-500 hover:bg-gradient-to-bl text-white px-6 py-2 font-semibold absolute right-5">
              Add Contact to Meeting 
            </button>
          </div>
          <div className="h-16 px-8 flex items-center">
            <p className="text-sky-500 font-bold">Meeting´s Contacts</p>
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
                    <ContactMr
                      contact={contact}
                      removeContact={removeContact}
                      key={contact.id}></ContactMr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      );
    

}

export default MeetingContacts