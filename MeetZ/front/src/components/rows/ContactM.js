import React from "react";

const ContactM = ({ contact, addContact }) => {
  
    return (
      <tr key={contact.id}>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{contact.name}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{contact.email}</div>
        </td>
        <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">

          <a
            onClick={(e, id) => addContact(e, contact.id)}
            className="text-blue-600 hover:text-blue-800 hover:cursor-pointer">
            Add
          </a>
        </td>
      </tr>
    );
  };
  
  export default ContactM;