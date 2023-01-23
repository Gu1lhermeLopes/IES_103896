import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MeetingService from "../services/MeetingService";

const UpdateMeeting = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meeting, setMeeting] = useState({
    id: id,
    topic: "",
    pass: "",
    date: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setMeeting({ ...meeting, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MeetingService.getMeetingById(meeting.id);
        setMeeting(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateMeeting = (e) => {
    e.preventDefault();
    console.log(meeting);
    MeetingService.updateMeeting(meeting, id)
      .then((response) => {
        navigate("/meetings");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addContact = (e) => {
    e.preventDefault();
    navigate(`/meetings/${id}/a`);
  };

  const listContact = (e) => {
    e.preventDefault();
    navigate(`/meetings/${id}/c`);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
                onClick={() => navigate("/")}
                className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:bg-gradient-to-bl text-white px-6 py-2 font-semibold ml-5 mr-20">
                Back
        </button>

        <button
              onClick={listContact}
              className="rounded-full bg-gradient-to-r from-fuchsia-600 to-rose-500 hover:bg-gradient-to-bl text-white px-6 py-2 font-semibold absolute right-5">
              Meeting´s Contacts
        </button>

      </div>
    <div className="flex max-w-2xl mx-auto shadow border-b">

      <div className="px-8 py-8">

        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Meeting</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">

          <label className="block text-gray-600 text-sm font-normal">
            Topic
          </label>
          <input
            type="text"
            name="topic"
            value={meeting.topic}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Pass
          </label>
          <input
            type="text"
            name="pass"
            value={meeting.pass}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
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
            onClick={updateMeeting}
            className="rounded-full text-white font-semibold bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br py-2 px-6">
            Update
          </button>
          <button
            onClick={() => navigate("/")}
            className="rounded-full text-white font-semibold bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UpdateMeeting