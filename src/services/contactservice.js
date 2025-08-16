import axios from "axios";

class Contactservice {
    saveContact(contData) {
        return axios.post("http://localhost:3000/contactpage", contData);
    }

    adminLogin(data) {
        return axios.post("http://localhost:3000/loginadmin", data);
    }

    hrLogin(hrData) {
        return axios.post("http://localhost:3000/hrlog", hrData);
    }

    userLogin(uData) {
        return axios.post("http://localhost:3000/loginuser", uData);
    }
}

export default new Contactservice();
