import React from "react";
import Contactservice from "../services/contactservice.js";
import Admin from "../component/admindashboard.jsx";
import HR from "../component/HRdashboard.jsx";
import Jobseeker from "../component/Jobseekerdashboard.jsx"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      name: "",
      pass: "",
      role: "",
      userRole: "",
      msg: ""
    };
  }

  loginlogic = (value) => {
    this.setState({ isLogin: value, msg: "", userRole: "" });
  };

  sendlogintoservice = () => {
    const { name, pass, role } = this.state;


    let api;
    if (role === "admin") {
      api = Contactservice.adminLogin({ name, pass, role });
    } else if (role === "HR") {
      api = Contactservice.hrLogin({ name, pass, role });
    } else if (role === "User") {
      api = Contactservice.userLogin({ name, pass, role });
    } else {
      this.setState({ msg: "Invalid role selected." });
      return;
    }

    api
      .then((result) => {
        this.setState({ msg: result.data.msg || result.data.status });

        if (result.data.status === "valid") {
          this.setState({ userRole: role });
        }
      })
      .catch((err) => {
        this.setState({
          msg: err.response ? err.response.data.status : "Error occurred",
        });
      });
  };

  render() {
    const { isLogin, userRole, msg } = this.state;

    if (userRole === "admin") {
      return <Admin />;
    }

    if (userRole === "HR") {
      return <HR />;
    }

    if (userRole === "User") {
      return <Jobseeker />;
    }

    return (
      <div className="auth-box">
        <h2 className="auth-title">Welcome</h2>

        <div className="tab-buttons">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => this.loginlogic(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => this.loginlogic(false)}
          >
            Register
          </button>
        </div>

        {!isLogin && (
          <div className="input-group">
            <input
              type="text"
              placeholder="User name..."
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password.."
              onChange={(e) => this.setState({ pass: e.target.value })}
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => this.setState({ uemail: e.target.value })}
            />
            <input
              type="text"
              placeholder="Contact"
              onChange={(e) => this.setState({ contact: e.target.value })}
            />
            <input
              type="text"
              placeholder="Passout Year"
              onChange={(e) => this.setState({ passoutyear: e.target.value })}
            />
            <input
              type="text"
              placeholder="College Name..."
              onChange={(e) => this.setState({ college: e.target.value })}
            />
            <input
              type="text"
              placeholder="Skills..."
              onChange={(e) => this.setState({ skills: e.target.value })}
            />
            <input
              type="text"
              placeholder="Experience..."
              onChange={(e) => this.setState({ experience: e.target.value })}
            />
            <input
              type="text"
              placeholder="Role (JobSeeker)"
              onChange={(e) => this.setState({ role: e.target.value })}
            />
          </div>
        )}

        {isLogin && (
          <div className="input-group">
            <input
              type="text"
              placeholder="User name..."
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password.."
              onChange={(e) => this.setState({ pass: e.target.value })}
            />
            <select
              className="form-select"
              onChange={(e) => this.setState({ role: e.target.value })}
              defaultValue=""
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="admin">admin</option>
              <option value="HR">HR</option>
              <option value="User">User</option>
            </select>
          </div>
        )}

        <button
          type="button"
          className="login-btn"
          onClick={this.sendlogintoservice}
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p style={{ color: "red" }}>{msg}</p>

        <div className="auth-footer">
          {isLogin ? (
            <p>
              Not a member?{" "}
              <span
                className="toggle-link"
                onClick={() => this.loginlogic(false)}
              >
                Register Here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                className="toggle-link"
                onClick={() => this.loginlogic(true)}
              >
                Login now
              </span>
            </p>
          )}
        </div>
      </div>
    );
  }
}
