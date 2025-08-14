import React from "react";
import HrService from "../services/adminservice.js";

class AddHR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            pass: "",
            email: "",
            contact_number: "",
            company_name: "",
            experience: "",
            role: "HR",
            loading:false,
            msg: ""
        };
    }

    sendHrToServer = () => {
        this.setState({ loading: true, msg: "" });
        HrService.saveHr(this.state)
            .then((result) => {
                this.setState({
                    msg: result.data.status || "HR added successfully",
                    name: "",
                    pass: "",
                    email: "",
                    contact_number: "",
                    company_name: "",
                    experience: "",
                    role: "HR",
                    loading:false
                });
            })
            .catch((err) => {
                this.setState({ msg: err.message || "Error adding HR" ,loading:false});
            });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.sendHrToServer();
    };

    render() {
        return (
            <div className="container bg-light p-4 mt-4 shadow rounded" style={{ maxWidth: "600px" }}>
                <h1 className="mb-3">Add New HR</h1>

                <form onSubmit={this.handleSubmit}>
                    
                    <div className="form-group mb-3">
                        <input type="text" name="name" value={this.state.name} className="form-control" placeholder="Enter HR name" onChange={this.handleChange} />
                    </div>

                    <div className="form-group mb-3">
                        <input type="password" name="pass" value={this.state.pass} placeholder="Enter password" className="form-control" onChange={this.handleChange} />
                    </div>

                    <div className="form-group mb-3">
                        <input type="email" name="email" value={this.state.email} placeholder="Enter email" className="form-control" onChange={this.handleChange} />
                    </div>

                    <div className="form-group mb-3">
                        <input type="text" name="contact_number" value={this.state.contact_number} placeholder="Enter contact number" className="form-control" onChange={this.handleChange} />
                    </div>

                    <div className="form-group mb-3">
                        <input type="text" name="company_name" value={this.state.company_name} placeholder="Enter company name" className="form-control" onChange={this.handleChange} />
                    </div>

                    <div className="form-group mb-3">
                        <input type="text" name="experience" value={this.state.experience} placeholder="Enter experience" className="form-control" onChange={this.handleChange} />
                    </div>

                    <button type="submit" className="btn btn-success w-100">Add HR</button>
                </form>

                {this.state.msg && <div className="alert alert-info mt-3">{this.state.msg}</div>}
            </div>
        );
    }
}

export default AddHR;
