import React from "react";
import { useNavigate } from "react-router-dom";

const Meeting = ({ meeting, deleteMeeting,duplicateMeeting }) => {
    const navigate = useNavigate();
    const editMeeting = (e, id) => {
      e.preventDefault();
      navigate(`/meetings/${id}`);
    };
  
    return (
      <tr key={meeting.id}>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{meeting.topic}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{meeting.pass}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{meeting.date}</div>
        </td>
        <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
          <a
            onClick={(e, id) => editMeeting(e, meeting.id)}
            className=" text-emerald-500 hover:text-emerald-800 px-4 hover:cursor-pointer">
            Details
          </a>
          <a
            onClick={(e, id) => duplicateMeeting(e, meeting.id)}
            className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
            Duplicate
          </a>
          <a
            onClick={(e, id) => deleteMeeting(e, meeting.id)}
            className="text-red-600 hover:text-red-800 hover:cursor-pointer">
            Delete
          </a>
        </td>
      </tr>
    );
  };
  
  export default Meeting;