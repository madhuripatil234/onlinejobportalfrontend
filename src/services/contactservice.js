import axios from "axios";

class contactservice {
    saveContact(contData){
        let promise=axios.post("http://localhost:3000/contactpage",contData);
        return promise;
    }
}
export default new contactservice();