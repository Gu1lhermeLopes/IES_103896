import React from "react";

const Contact = ({ contact, deleteContact }) => {

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
            onClick={(e, id) => deleteContact(e, contact.id)}
            className="text-red-600 hover:text-red-800 hover:cursor-pointer">
            Delete
          </a>
        </td>
      </tr>
    );
  };
  
  export default Contact;