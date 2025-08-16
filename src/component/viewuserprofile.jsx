import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HRpanelservice from "../services/HRpanelservice";
import ScheduleInterview from "./interviewschedule";

export default function ViewProfile({ uid }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSchedule, setShowSchedule] = useState(false); 
  const [aid, setAid] = useState(null); 

  useEffect(() => {
    if (!uid) return;
    setLoading(true);

   
    HRpanelservice.profile(uid)
      .then((res) => {
        const data = res.data;
        if (data.status === "valid" && data.joblist.length > 0) {
          const application = data.joblist[0]; 
          setProfile(application); 
          setAid(application.aid); 
        }
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
      })
      .finally(() => setLoading(false));
  }, [uid]);

  if (loading) return <div className="text-center mt-4">Loading profile...</div>;
  if (!profile) return <div className="text-center mt-4 text-danger">Profile not found</div>;

  return (
    <div className="container1 mt-4">
      {!showSchedule ? (
        <div className="card shadow-lg p-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h3 className="card-title text-center text-primary mb-4">User Profile</h3>
          <table className="table table-bordered">
            <tbody>
              <tr><th>Name</th><td>{profile.name}</td></tr>
              <tr><th>Email</th><td>{profile.uemail}</td></tr>
              <tr><th>Contact</th><td>{profile.contact}</td></tr>
              <tr><th>Passout Year</th><td>{profile.passoutyear}</td></tr>
              <tr><th>College Name</th><td>{profile.collegename}</td></tr>
              <tr><th>Skills</th><td>{profile.skills}</td></tr>
              <tr><th>Experience</th><td>{profile.experience}</td></tr>
            </tbody>
          </table>
          <div className="text-center">
            <button className="btn btn-primary w-100" onClick={() => setShowSchedule(true)}>
              Schedule Interview
            </button>
          </div>
        </div>
      ) : (
        
        <ScheduleInterview aid={profile.aid} />
      )}
    </div>
  );
}
