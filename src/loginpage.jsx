import React from "react";
import ReactDom from "react-dom"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

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
                 <input type="text" name="uname" placeholder="User name..." />
                </div>

                 <div className="input-group">
                 <input type="password" name="pass" placeholder="password.." />
                </div>

                <div className="input-group">
                  <input type="text" name="uemail" placeholder="Email" />
                </div>

                 <div className="input-group">
                 <input type="text" name="contact" placeholder="Contact" />
                </div>

                <div className="input-group"> 
                  <input type="text" name="passoutyear" placeholder="Passout Year" />
                </div>

                <div className="input-group">
                <input type="text" name="collegename" placeholder="College Name" />
                </div>

                <div className="input-group">
                <input type="text" name="skills" placeholder="Skills" />
                </div>

                <div className="input-group">
                 <input type="text" name="experience" placeholder="Experience" />
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


          

            <button type="submit" className="login-btn">
              {isLogin ? 'Login' : 'Register'}
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
