import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MeetingService from "../services/MeetingService";
import Meeting from "./rows/Meeting";

const MeetingList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [meetings, setMeetings] = useState(null);
    const [date, setDate] = useState({start:"", end:""});

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await MeetingService.getMeetings();
            setMeetings(response.data);
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      }, []);
    

      const deleteMeeting = (e, id) => {
        e.preventDefault();
        MeetingService.deleteMeeting(id).then((res) => {
          if (meetings) {
            setMeetings((prevElement) => {
              return prevElement.filter((meeting) => meeting.id !== id);
            });
          }
        });
      };

      const duplicateMeeting = (e, id) => {
        e.preventDefault();
        MeetingService.duplicateMeeting(id);
        window.location.reload(false);
      };


      const handleChange = (e) => {
        const value = e.target.value;
        setDate({ ...date, [e.target.name]: value });
    };
      const dateMeeting = (e) => {
        e.preventDefault();
        console.log(date.start);
        console.log(date.end);
        if (date.start=="" || date.end=="") {
          alert ("Missing Fields"); 
        } else {
          navigate(`/meetings/date/${date.start}/${date.end}`);
        }
      };
    
   
      return (
        <div className="container mx-auto my-8">

          <div className="h-12">
            <button
              onClick={() => navigate("/meetings/add")}
              className="rounded-full bg-gradient-to-r from-fuchsia-600 to-rose-500 hover:bg-gradient-to-bl text-white px-6 py-2 font-semibold absolute right-5">
              Add Meeting
            </button>
            <button
              onClick={() => navigate("/contacts")}
              className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:bg-gradient-to-bl text-white px-6 py-2 font-semibold ml-5 mr-20">
              Contacts
            </button>

              <input 
                type="datetime-local"  
                name="start"  
                value={date.start}
                onChange={(e) => handleChange(e)}
              />

              <input 
                type="datetime-local"
                name="end"   
                value={date.end} 
 
                onChange={(e) => handleChange(e)}
              />
            <button
              onClick={dateMeeting}
              className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-bl text-white px-6 py-2 font-semibold">
              Search Dates
            </button>

          </div>
          <div className="h-16 px-8 flex items-center">
            <p className="text-sky-500 font-bold">Meetings</p>
          </div>
          
          <div className="flex shadow border-b">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Topic
                  </th>
                  <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Pass
                  </th>
                  <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Date
                  </th>
                  <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Actions
                  </th>
                </tr>
              </thead>
              {!loading && (
                <tbody className="bg-white">
                  {meetings.map((meeting) => (
                    <Meeting
                      meeting={meeting}
                      deleteMeeting={deleteMeeting}
                      duplicateMeeting={duplicateMeeting}
                      key={meeting.id}></Meeting>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      );
    

}

export default MeetingList