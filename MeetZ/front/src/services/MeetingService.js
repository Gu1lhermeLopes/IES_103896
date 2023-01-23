import axios from "axios";

const MEETING_API_BASE_URL = "http://localhost:8080/api/meetings"

class  MeetingService {
    saveMeeting(meeting) {
      return axios.post(MEETING_API_BASE_URL+"/"+"add", meeting);
    }

    getMeetings() {
        return axios.get(MEETING_API_BASE_URL+"/"+"date");
    }
    getMeetingsDate(start,end) {
        return axios.get(MEETING_API_BASE_URL+"/"+"date/"+start+"/"+end);
    }

    deleteMeeting(id) {
        return axios.delete(MEETING_API_BASE_URL + "/" + id +"/delete");
    }
    
    getMeetingById(id) {
        return axios.get(MEETING_API_BASE_URL + "/" + id);
    }

    getMeetingContactsById(id) {
        return axios.get(MEETING_API_BASE_URL + "/" + id+"/c");
    }
    
    updateMeeting(meeting, id) {
        return axios.put(MEETING_API_BASE_URL + "/" + id, meeting);
    }

    duplicateMeeting(id) {
        return axios.post(MEETING_API_BASE_URL + "/" + id+"/duplicate");
    }

    addContact(idm,id) {
        return axios.put(MEETING_API_BASE_URL + "/" + idm +"/"+id);
    }

    removeContact(idm,id) {
        return axios.put(MEETING_API_BASE_URL + "/" + idm +"/"+id+"/r");
      }
}
export default new MeetingService();