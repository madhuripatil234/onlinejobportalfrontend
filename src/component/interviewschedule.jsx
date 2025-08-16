import React, { useState } from "react";
import HRpanelservice from "../services/HRpanelservice";

export default function ScheduleInterview({ aid, candidateName, jobTitle }) {
  const [formData, setFormData] = useState({
    idate: "",
    itime: "",
    mode: "",
    location: "",
    meeting_link: ""
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (name === "mode") {
      setFormData((prev) => ({
        ...prev,
        mode: value,
        location: value === "Offline" ? prev.location : "",
        meeting_link: value === "Online" ? prev.meeting_link : ""
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const payload = {
      aid,
      idate: formData.idate,
      itime: formData.itime,
      mode: formData.mode,
      location: formData.mode === "Offline" ? formData.location : "",
      meeting_link: formData.mode === "Online" ? formData.meeting_link : ""
    };

    HRpanelservice.interviewschedule(payload)
      .then((res) => {
        setMsg(res.data.msg || "Interview scheduled successfully");
        setFormData({
          idate: "",
          itime: "",
          mode: "",
          location: "",
          meeting_link: ""
        });
      })
      .catch((err) => {
        setMsg(err.response?.data?.msg || err.message || "Something went wrong");
      });
  };

  return (
    <div className="container1 mt-4 bg-light"  style={{ maxWidth: "500px", margin:"auto" }}>
      <h3 style={{textAlign:"center"}}>Schedule Interview</h3>
      <h5>Candidate: {candidateName}</h5>
     

      {msg && <div className="alert alert-info">{msg}</div>}

      <form onSubmit={handleSubmit} className="border p-3 rounded">
        <div className="mb-3">
          <label className="form-label">Application ID</label>
          <input
            type="text"
            name="aid"
            value={aid}
            readOnly
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Interview Date</label>
          <input
            type="date"
            name="idate"
            value={formData.idate}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Interview Time</label>
          <input
            type="time"
            name="itime"
            value={formData.itime}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mode</label>
          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        {formData.mode === "Offline" && (
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter location"
              required
            />
          </div>
        )}

        {formData.mode === "Online" && (
          <div className="mb-3">
            <label className="form-label">Meeting Link</label>
            <input
              type="text"
              name="meeting_link"
              value={formData.meeting_link}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter meeting link"
              required
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100">
          Schedule Interview
        </button>
      </form>
    </div>
  );
}
