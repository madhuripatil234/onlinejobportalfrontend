import axios from "axios";

class Contactservice {
    saveContact(contData){
        let promise=axios.post("http://localhost:3000/contactpage",contData);
        return promise;
    }
     saveLogin(lcontData){
        let promise=axios.post("http://localhost:3000/loginadmin",lcontData);
        return promise;
    }
    
}
export default new Contactservice();