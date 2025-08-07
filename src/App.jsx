import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './contactus.css';
import ContactUsForm from "./contactus";


// Dummy Components (replace with actual ones)
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
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/viewquestion">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">Contact_us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/attendexam">Service</NavLink>
              </li>
            </ul>
            
          </div>
        </nav>

     
          <Routes>
            <Route path="/" element={<AddQuestion />} />
            <Route path="/viewquestion" element={<ViewQuestion />} />
            <Route path="/attendexam" element={<AttendExam />} />
            < Route path="/contactus" element={<ContactUsForm/>}/>
          </Routes>
        
      </BrowserRouter>
    );
  }
}

export default App;
