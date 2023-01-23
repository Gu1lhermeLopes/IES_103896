
import './App.css';
import AddMeeting from './components/AddMeeting';
import AddContact from './components/AddContact';
import MeetingList from './components/MeetingList';
import UpdateMeeting from './components/UpdateMeeting';
import MeetingListDate from './components/MeetingListDate';
import ContactList from './components/ContactList';
import AddCtoM from './components/AddCtoM';
import MeetingContacts from './components/MeetingContacts';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<MeetingList />} />
        <Route path="/" element={<MeetingList />}></Route>
        <Route path="/meetings" element={<MeetingList />} />
        <Route path="/meetings/date/:start/:end" element={<MeetingListDate />} />
        <Route path="/meetings/add" element={<AddMeeting />} />
        <Route path="/meetings/:id" element={<UpdateMeeting />} />
        <Route path="/meetings/:id/a" element={<AddCtoM />} />
        <Route path="/meetings/:id/c" element={<MeetingContacts />} />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts" element={<ContactList />} />
      </Routes>
    </BrowserRouter>

    </>
    );
}

export default App;
