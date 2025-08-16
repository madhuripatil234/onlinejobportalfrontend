import React, { useEffect, useState } from "react";
import HRpanelservice from "../services/HRpanelservice";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ViewJobs() {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchApplications = (page) => {
    HRpanelservice.viewjobs(page)
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

  
  

  return (
    <div className="container1 mt-4">
      <h3 className="mb-3 text-white">Applications List</h3>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Sr no.</th>
            <th>company_name</th>
            <th>title</th>
            <th>description</th>
            <th>location</th>
            <th>salary</th>
            <th>Job_type</th>
             <th>posted_date_time</th>
          </tr>
        </thead>
        <tbody>
          {applications.length > 0 ? (
            applications.map((app, index) => (
              <tr key={app.aid || index}>
                <td>{(currentPage - 1) * applications.length + index + 1}</td>
                <td>{app.company_name}</td>
                <td>{app.title}</td>
                <td>{app.description}</td>
                <td>{app.location}</td>
                <td>{app.salary}</td>
                <td>{app.job_type}</td>
                <td>{new Date(app.posted_date_time).toLocaleDateString()}</td>
            
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No jobs found
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
