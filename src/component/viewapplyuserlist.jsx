import React, { useEffect, useState } from "react";
import HRpanelservice from "../services/HRpanelservice";
import ViewProfile from "./viewuserprofile";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ApplicationsList() {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUserId, setSelectedUserId] = useState(null); 

  const fetchApplications = (page) => {
    HRpanelservice.viewuserapply(page)
      .then((res) => {
        if (Array.isArray(res.data.joblist)) {
          setApplications(res.data.joblist);
          setCurrentPage(res.data.pagination.currentPage);
          setTotalPages(res.data.pagination.totalPages);
        } else {
          setApplications([]);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchApplications(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  
  if (selectedUserId) {
    return (
      <ViewProfile 
        uid={selectedUserId} 
        goBack={() => setSelectedUserId(null)} 
      />
    );
  }

  return (
    <div className="container1 mt-4">
      <h3 className="mb-3 text-white">Applications List</h3>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Sr no.</th>
            <th>Applicant Name</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Applied Date</th>
            <th>View Profile</th>
          </tr>
        </thead>
        <tbody>
          {applications.length > 0 ? (
            applications.map((app, index) => (
              <tr key={app.aid || index}>
                <td>{(currentPage - 1) * applications.length + index + 1}</td>
                <td>{app.applicant_name}</td>
                <td>{app.uemail}</td>
                <td>{app.job_title}</td>
                <td>{app.company_name}</td>
                <td>{new Date(app.applied_on).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm w-100"
                    onClick={() => setSelectedUserId(app.uid)}
                  >
                    View Profile
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No applications found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <nav>
        <ul className="pagination justify-content-end">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i + 1}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
