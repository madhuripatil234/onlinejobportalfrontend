import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './component/loginpage';
import './login.css';
import './contactus.css';
import ContactUsForm from "./component/contactus";
import Admin from "./component/admindashboard";


const AddQuestion = () => <h2>Add Questions Page</h2>;
const ViewQuestion = () => <h2>View Questions Page</h2>;
const AttendExam = () => <h2>Attend Exam Page</h2>;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">Online Job Portal</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/viewquestion">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Service</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <a href="/login" className="login_btn">Login</a>
          </div>
        </nav>

        <Routes>
     
          <Route path="/attendexam" element={<AttendExam />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUsForm />} />
          <Route path="/addquestion" element={<AddQuestion />} />
          <Route path="/viewquestion" element={<ViewQuestion />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
