// src/components/ViewHr.jsx
import React, { useEffect, useState } from "react";
import HrService from "../services/adminservice";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ViewHr() {
  const [hrList, setHrList] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const limit = 5;
  const [loading, setLoading] = useState(true);

  // Fetch paginated HR list
  const fetchHrList = () => {
    setLoading(true);
    HrService.getAllHr(page, limit)
      .then((res) => {
        if (Array.isArray(res.data.joblist)) {
          setHrList(res.data.joblist);
          setTotal(res.data.pagination?.total || res.data.joblist.length);
        } else {
          setHrList([]);
          setTotal(0);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  // Search handler
  const handleSearch = (value) => {
    setSearchTerm(value);
    if (!value.trim()) {
      fetchHrList();
      return;
    }

    setLoading(true);
    HrService.searchHRByName(value)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setHrList(res.data);
          setTotal(res.data.length);
          setPage(1);
        } else {
          setHrList([]);
          setTotal(0);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  // Delete handler
  const handleDelete = (id) => {
    HrService.deleteHrById(id)
      .then((res) => {
        if (res.data.status === "delete") {
          alert(res.data.msg); // e.g., "HR deleted successfully"
          fetchHrList(); // refresh list
        } else {
          alert(res.data.msg || "Delete failed");
        }
      })
      .catch((err) => {
        console.error(err);
        const errorMsg =
          err.response?.data?.error || err.message || "Unknown error occurred";
        alert("Error deleting HR: " + errorMsg);
      });
  };

  // Fetch HR list on page change
  useEffect(() => {
    if (!searchTerm.trim()) fetchHrList();
  }, [page, searchTerm]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">HR List</h3>

      {/* Search */}
      <div className="d-flex mb-3">
        <input
          type="text"
          placeholder="Search HR by name..."
          className="form-control me-2"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Company</th>
                <th>Experience</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {hrList.length > 0 ? (
                hrList.map((hr) => (
                  <tr  className="row-table"key={hr.hid}>
                    <td>{hr.hid}</td>
                    <td>{hr.name}</td>
                    <td>{hr.email}</td>
                    <td>{hr.contact_number}</td>
                    <td>{hr.company_name}</td>
                    <td>{hr.experience}</td>
                    <td>{hr.role}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(hr.hid)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No HR found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          {!searchTerm.trim() && (
            <div className="d-flex justify-content-end">
              <nav>
                <ul className="pagination">
                  <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                    <button
                      className="page-link"
                      onClick={() => setPage(page - 1)}
                    >
                      Previous
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      key={i}
                      className={`page-item ${page === i + 1 ? "active" : ""}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      page === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setPage(page + 1)}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  );
}