import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddHR from "./AddHr";

const fetchDashboardStats = () => {
  return Promise.resolve({
    
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
      showAddHR: false,
    };
  }

  toggleAddHR = () => {
    this.setState({ showAddHR: true });
  };

  componentDidMount() {
    fetchDashboardStats().then((data) => {
      this.setState({ stats: data });
    });
  }

  render() {
    const { totalJobs, totalHRs, totalApplicants, showAddHR } = this.state;

    return (
      <div className="d-flex" style={{ minHeight: "100vh" }}>
       
        <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
          <h4>Admin Panel</h4>
          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <span className="nav-link text-white" style={{ cursor: "pointer" }}>Dashboard</span>
            </li>
            <li className="nav-item">
              <span className="nav-link text-white" style={{ cursor: "pointer" }}>Manage Jobs</span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link text-white"
                style={{ cursor: "pointer" }}
                onClick={this.toggleAddHR}
              >
                Manage HR
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link text-white" style={{ cursor: "pointer" }}>Manage Applicants</span>
            </li>
          </ul>
        </div>

    
        <div className="flex-grow-1 p-4 bg-light">
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

        
          {showAddHR && <AddHR />}
        </div>
      </div>
    );
  }
}
