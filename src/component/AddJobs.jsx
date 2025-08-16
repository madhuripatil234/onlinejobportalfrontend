import React from "react";
import HRpanel from "../services/HRpanelservice";

class AddJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jid: 0,
      company_name: "",
      title: "",
      description: "",
      location: "",
      salary: "",
      job_type: "",
      posted_date_time: "",
      hid: props.hid || "", // HR ID from parent or session
      msg: ""
    };
  }

  sendJobsToServer = () => {
    let promise = HRpanel.saveJob(this.state);
    promise
      .then((result) => {
        this.setState({
          msg: result.data.status,
          company_name: "",
          title: "",
          description: "",
          location: "",
          salary: "",
          job_type: "",
          posted_date_time: ""
        });
      })
      .catch((err) => {
        this.setState({ msg: err.msg });
      });
  };

  render() {
    return (
      
        <div className="container1 bg-light p-4 rounded shadow" style={{Width:"300px" }}>
          <h1 className="mb-4 text-center">Add New Job</h1>

          <div className="form-group mb-3">
            <input
              type="text"
              name="company_name"
              value={this.state.company_name}
              className="form-control"
              placeholder="Enter company name"
              onChange={(e) => this.setState({ company_name: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              name="title"
              value={this.state.title}
              className="form-control"
              placeholder="Enter title"
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <textarea
              name="description"
              value={this.state.description}
              className="form-control"
              placeholder="Enter description"
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              name="location"
              value={this.state.location}
              className="form-control"
              placeholder="Enter location"
              onChange={(e) => this.setState({ location: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="number"
              name="salary"
              value={this.state.salary}
              className="form-control"
              placeholder="Enter salary"
              onChange={(e) => this.setState({ salary: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="date"
              name="posted_date_time"
              value={this.state.posted_date_time}
              className="form-control"
              onChange={(e) => this.setState({ posted_date_time: e.target.value })}
            />
          </div>

          <div className="form-group mb-3">
            <select
              className="form-select"
              value={this.state.job_type}
              onChange={(e) => this.setState({ job_type: e.target.value })}
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <button className="btn btn-success w-100" onClick={this.sendJobsToServer}>
            Add Job
          </button>

          {this.state.msg && (
            <div className="alert alert-info mt-3 text-center">
              {this.state.msg}
            </div>
          )}
        </div>
    
    );
  }
}

export default AddJobs;
