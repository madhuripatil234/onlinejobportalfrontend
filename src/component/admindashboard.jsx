import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddHR from "./AddHr";
import ViewHr from "./ViewHr";

// Simulating an API call
const fetchDashboardStats = () => {
  return Promise.resolve({
    totalJobs: 12,
    totalHRs: 5,
    totalApplicants: 48
  });
};

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: {
        totalJobs: 0,
        totalHRs: 0,
        totalApplicants: 0,
      },
      activeView: "dashboard" // "dashboard", "addHR", "viewHR"
    };
  }

  setActiveView = (view) => {
    this.setState({ activeView: view });
  };

  componentDidMount() {
    fetchDashboardStats().then((data) => {
      this.setState({ stats: data });
    });
  }

  render() {
    const { totalJobs, totalHRs, totalApplicants } = this.state.stats;
    const { activeView } = this.state;

    return (
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        
        {/* Sidebar */}
        <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
          <h4>Admin Panel</h4>
          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <span
                className="nav-link text-white"
                style={{ cursor: "pointer" }}
                onClick={() => this.setActiveView("dashboard")}
              >
                Dashboard
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link text-white" style={{ cursor: "pointer" }}>
                Manage Jobs
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link text-white"
                style={{ cursor: "pointer" }}
                onClick={() => this.setActiveView("addHR")}
              >
                Add HR
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link text-white"
                style={{ cursor: "pointer" }}
                onClick={() => this.setActiveView("viewHR")}
              >
                View HR
              </span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4 bg-light">
          {activeView === "dashboard" && (
            <>
              <h2 className="mb-4">Dashboard Overview</h2>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card text-white bg-primary">
                    <div className="card-body">
                      <h5>Total Jobs</h5>
                      <p className="card-text display-6">{totalJobs}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card text-white bg-success">
                    <div className="card-body">
                      <h5>Total HRs</h5>
                      <p className="card-text display-6">{totalHRs}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card text-white bg-warning">
                    <div className="card-body">
                      <h5>Total Applicants</h5>
                      <p className="card-text display-6">{totalApplicants}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeView === "addHR" && <AddHR />}
          {activeView === "viewHR" && <ViewHr />}
        </div>
      </div>
    );
  }
}
