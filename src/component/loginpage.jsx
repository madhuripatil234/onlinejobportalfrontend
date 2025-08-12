import React from "react";
import ReactDom from "react-dom"
import { Navigate } from "react-router-dom";
import Contactservice from "../services/contactservice";


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  sendCategorytoservice = () => {
  let promise = Adminservice.contactservice(this.state);
  promise
    .then((result) => {
     
      this.setState({ msg: result.data.status });
    })
    .catch((err) => {
      this.setState({ 
        msg: err.response ? err.response.data.status : "Error occurred" 
      });
    });
};


  loginlogic = (value) => {
    this.setState({ isLogin: value });
  };
  
  render() {
    const { isLogin } = this.state;

    return (
     
        <div className="auth-box">
          <h2 className="auth-title">Welcome</h2>

          <div className="tab-buttons">
            <button
              className={isLogin ? 'active' : ''}
              onClick={() => this.loginlogic(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? 'active' : ''}
              onClick={() => this.loginlogic(false)}
            >
              Register
            </button>
          </div>
         
            {!isLogin && (
              <div className="input-group">

                 <div className="input-group">
                 <input type="text" name="uname" placeholder="User name..."  onChange={(e) => this.setState({ uname: e.target.value })}/>
                </div>

                 <div className="input-group">
                 <input type="password" name="pass" placeholder="password.." onChange={(e) => this.setState({ pass: e.target.value })} />
                </div>

                <div className="input-group">
                  <input type="text" name="uemail" placeholder="Email" onChange={(e) => this.setState({ uemail: e.target.value })}/>
                </div>

                 <div className="input-group">
                 <input type="text" name="contact" placeholder="Contact" onChange={(e) => this.setState({ contact: e.target.value })}/>
                </div>

                <div className="input-group"> 
                  <input type="text" name="passoutyear" placeholder="Passout Year" onChange={(e) => this.setState({ passoutyear: e.target.value })} />
                </div>

                <div className="input-group">
                <input type="text" name="collegename" placeholder="College Name..." onChange={(e) => this.setState({ college: e.target.value })}/>
                </div>

                <div className="input-group">
                <input type="text" name="skills" placeholder="Skills..." onChange={(e) => this.setState({ skills: e.target.value })}/>
                </div>

                <div className="input-group">
                 <input type="text" name="experience" placeholder="Experience..." onChange={(e) => this.setState({ experience: e.target.value })}/>
                </div>

                <div className="input-group">
                 <input type="text" name="role" placeholder="Role (JobSeeker)" />
                </div>
              </div>
            )}
             

              {isLogin && (
              <div className="input-group">

                 <div className="input-group">
                 <input type="text" name="uname" placeholder="User name..." />
                </div>

                 <div className="input-group">
                 <input type="text" name="pass" placeholder="password.." />
                </div>
                <div className="input-group">
                <select name="role" className="form-select">
                <option value="">Select Role</option>
                <option value="hr">Admin</option>
                <option value="admin">HR</option>
                <option value="jobseeker">Jobseeker</option>
                 </select>
                </div>  
                </div>
            )}


          

            <button type="button" className="login-btn">
              {isLogin ? "Login" : "Register"}
            </button>


            <div className="auth-footer">
               {isLogin ? (
                 <p>Not a member? <span className="toggle-link" onClick={() => this.loginlogic(false)}>Register Here</span></p>
              ) : (
             <p>Already have an account? <span className="toggle-link" onClick={() => this.loginlogic(true)}>Login now</span></p>
            )}
         </div>

        
        </div>
    
    );
  }
}
