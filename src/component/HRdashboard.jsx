import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddJobs from "./AddJobs";
import Total from "./Totalcount";
import ApplicationsList from "./viewapplyuserlist";
import ScheduleInterview from "./interviewschedule"
import ViewJobs from "./viewalljobs";

export default class HR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "dashboard",
    };
  }

  setSection = (section) => {
    this.setState({ activeSection: section });
  };

  viewpage() {
    const { activeSection } = this.state;

    switch (activeSection) {
      case "addJobs":
        return <AddJobs />;
      case "viewjob":
        return <ViewJobs/>;
      case "schedule":
        return <ScheduleInterview />;
      case "total":
        return <Total />;
      case "viewapply":
        return <ApplicationsList />;
      default:
        return <h1>Welcome HR</h1>;
    }
  }

  render() {
    const { activeSection } = this.state;

    return (
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
          <h3 className="mb-4">HR Panel</h3>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <span
                className={`nav-link ${activeSection === "dashboard" ? "fw-bold" : ""} text-white`}
                style={{ cursor: "pointer" }}
                onClick={() => this.setSection("dashboard")}
              >
                <i className="bi bi-speedometer2 me-2"></i> Dashboard
              </span>
            </li>
            <li className="nav-item mb-2">
              <span
                className={`nav-link ${activeSection === "addJobs" ? "fw-bold" : ""} text-white`}
                style={{ cursor: "pointer" }}
                onClick={() => this.setSection("addJobs")}
              >
                <i className="bi bi-plus-circle me-2"></i> Add Jobs
              </span>
            </li>
            <li className="nav-item mb-2">
              <span
                className={`nav-link ${activeSection === "viewjob" ? "fw-bold" : ""} text-white`}
                style={{ cursor: "pointer" }}
                onClick={() => this.setSection("viewjob")}
              >
                <i className="bi bi-card-list me-2"></i> View All Jobs
              </span>
            </li>
            <li className="nav-item mb-2">
              <span
                className={`nav-link ${activeSection === "total" ? "fw-bold" : ""} text-white`}
                style={{ cursor: "pointer" }}
                onClick={() => this.setSection("total")}
              >
                <i className="bi bi-bar-chart-line me-2"></i> Total Application Count
              </span>
            </li>
            <li className="nav-item mb-2">
              <span
                className={`nav-link ${activeSection === "viewapply" ? "fw-bold" : ""} text-white`}
                style={{ cursor: "pointer" }}
                onClick={() => this.setSection("viewapply")}
              >
                <i className="bi bi-people me-2"></i> View All Job Apply Users
              </span>
            </li>
           
            <li className="nav-item mt-3">
              <button className="btn btn-danger w-100">
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </button>
            </li>
          </ul>
        </div>

        <div className="flex-grow-1 p-4">{this.viewpage()}</div>
      </div>
    );
  }
}
