import axios from "axios";

class HRpanel {
    saveJob(Data){
        let promise=axios.post("http://localhost:3000/addjobs",Data);
        return promise;
    }
     interviewschedule(aid){
        let promise=axios.post("http://localhost:3000/interviewscheduled",{ aid: aid });
        return promise;
    }
    Totalcountuserapply(total){
        let promise=axios.get("http://localhost:3000/totalapplication",total);
        return promise;
    }
     viewuserapply(){
        let promise=axios.get("http://localhost:3000/viewuserapplyjob");
        return promise;
    }
    profile(uid) {
    return axios.post("http://localhost:3000/getuserprofile", { uid: uid });
}


}
export default new HRpanel();







