import axios from "axios";

class Contactservice {
    saveContact(contData){
        let promise=axios.post("http://localhost:3000/contactpage",contData);
        return promise;
    }
     saveLogin(contData){
        let promise=axios.post("http://localhost:3000/loginadmin",contData);
        return promise;
    }
}
export default new Contactservice();