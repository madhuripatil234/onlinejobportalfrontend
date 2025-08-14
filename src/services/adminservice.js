import axios from "axios";

const API_URL = "http://localhost:3000";
class HrService {
   
     saveHr(hrData){
        let promise=axios.post("http://localhost:3000/addhr",hrData);
        return promise;
    }

    getAllHr(page = 1, limit = 5) {
    return axios.get(`${API_URL}/view?page=${page}&limit=${limit}`);
  }
  
    deleteHrById(id) {
  return axios.delete(`http://localhost:3000/detelehr`
    params: {hid:id}
}
  searchHRByName(name) {
    return axios.get(`${API_URL}/searchHRpByName`, {
      params: { name} // sends ?name=xyz
    });




}
   
}
export default new HrService();