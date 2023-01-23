import React, { useState } from 'react'
import MeetingService from '../services/MeetingService';
import { useNavigate } from "react-router-dom";

const AddMeeting = () => {
    const navigate = useNavigate();
    const [meeting, setMeeting] = useState({
        topic: "",
        pass: "",
        date: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setMeeting({ ...meeting, [e.target.name]: value });
    };

    const saveMeeting = (e) => {
        e.preventDefault();
        if (meeting.topic==""  || meeting.date=="") { 
            console.log("error");
            alert ("Missing Fields");  
        }else{
        MeetingService.saveMeeting(meeting)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
          navigate(`/`);
        }
      };


  
    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Add New Meeting</h1>
                </div> 

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-sm font-normal">Meeting Topic</label>
                    <input 
                        type="text" 
                        name="topic" 
                        value={meeting.topic}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border rounded-lg mt-2 px-2 py-2"></input>
                </div> 

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-sm font-normal">Meeting Pass</label>
                    <input 
                        type="text" 
                        name="pass" 
                        value={meeting.pass} 
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border rounded-lg mt-2 px-2 py-2"></input>
                </div> 

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-sm font-normal">Meeting Date</label>
                    <input 
                        type="datetime-local"
                        name="date" 
                        value={meeting.date} 
                        onChange={(e) => handleChange(e)}
                    />
                </div> 
                
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        onClick={saveMeeting}
                        className="rounded-full text-white font-semibold bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br py-2 px-6">
                        Save
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="rounded-full text-white font-semibold bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br py-2 px-6">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
  )
}

export default AddMeeting