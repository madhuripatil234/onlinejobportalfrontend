import React, { useState } from "react";
import HRpanelservice from "../services/HRpanelservice";

export default function ScheduleInterview({ aid }) {
  const [formData, setFormData] = useState({
    aid:aid,
    idate: "",
    itime: "",
    mode: "",
    location: "",
    meeting_link: ""
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === "mode") {
        return {
          ...prev,
          mode: value,
          location: value === "Offline" ? prev.location : "",
          meeting_link: value === "Online" ? prev.meeting_link : ""
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const sendscheduleToServer = (e) => {
    e.preventDefault();

    HRpanelservice.interviewschedule(formData)
      .then((result) => {
        setMsg(result.data.msg || "Interview scheduled successfully");
        setFormData((prev) => ({
          ...prev,
          idate: "",
          itime: "",
          mode: "",
          location: "",
          meeting_link: ""
        }));
      })
      .catch((err) => {
        setMsg(err.response?.data?.msg || err.message || "Something went wrong");
      });
  };

  return (
    <div className="container1 mt-4 bg-light mx-auto" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3 text-center">Schedule Interview</h3>

      {msg && <div className="alert alert-info">{msg}</div>}

      <form className="border p-3 rounded" onSubmit={sendscheduleToServer}>
        <div className="mb-3">
          <label className="form-label">Application ID</label>
          <input
            type="text"
            className="form-control"
            name="aid"
            value={formData.aid}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Interview Date</label>
          <input
            type="date"
            className="form-control"
            name="idate"
            value={formData.idate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Interview Time</label>
          <input
            type="time"
            className="form-control"
            name="itime"
            value={formData.itime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mode</label>
          <select
            className="form-select"
            name="mode"
            value={formData.mode}
            onChange={handleChange}
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
              className="form-control"
              name="location"
              value={formData.location}
              onChange={handleChange}
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
              className="form-control"
              name="meeting_link"
              value={formData.meeting_link}
              onChange={handleChange}
              placeholder="Enter meeting link"
              required
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100">
          Schedule
        </button>
      </form>
    </div>
  );
}
