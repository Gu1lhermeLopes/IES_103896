import axios from "axios";

const CONTACT_API_BASE_URL = "http://localhost:8080/api/contacts"

class  ContactService {
    saveContact(contact) {
      return axios.post(CONTACT_API_BASE_URL+"/add", contact);
    }
    getContacts() {
      return axios.get(CONTACT_API_BASE_URL);
    }


    deleteContact(id) {
      return axios.delete(CONTACT_API_BASE_URL + "/" + id +"/delete");
    }


}
export default new ContactService();