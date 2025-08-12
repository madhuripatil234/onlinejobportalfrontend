import React from "react";
import ReactDom from "react-dom";

class AddHR extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            id:0,
            hname:"",
            pass:"",
            email:"",
            contact_number:"",
            company_name:"",
            experience:"",
            role:"HR"
        }
    }
    saveHr=()=>{
        this.props. gethr(this.state);
    }
    render()
    {
        return<>
        <div className="container bg-light p-4 mt-4 shadow rounded" style={{ maxWidth: "600px" }}>
            <div className="from-group mb-3"><h1>Add New HR</h1></div>
            <div className="from-group control ">
                <input type="text" name="hname" value={this.state.name} className="from-control control" placeholder="Enter HR name"
                onChange={(e)=>this.setState({name:e.target.value})}/>
            </div>
             <div className="from-group control ">
                <input type="text" name="pass" value={this.state.pass} placeholder="Enter pass.." className="from-control control"
                onChange={(e)=>this.setState({pass:e.target.value})}/>
            </div>
             <div className="from-group control ">
                <input type="text" name="email" value={this.state.email} placeholder="Enter email..." className="from-control control"
                onChange={(e)=>this.setState({email:e.target.value})}/>
            </div>
             <div className="from-group control ">
                <input type="text" name="contact_number" value={this.state.contact_number} placeholder="Enter contact_number" className="from-control control"
                onChange={(e)=>this.setState({contact_number:e.target.value})}/>
            </div>
             <div className="from-group control ">
                <input type="text" name="company_name" value={this.state.company_name} placeholder="Enter company_name" className="from-control control"
                onChange={(e)=>this.setState({company_name:e.target.value})}/>
            </div>

             <div className="from-group control  ">
                <input type="text" name="experience" value={this.state.experience} placeholder="Enter experience" className="from-control control"
                onChange={(e)=>this.setState({experience:e.target.value})}/>
            </div>

            
             <div className="from-group control ">
                <input type="button" name="s" value='Add HR' className="btn btn-success w-100"
                onClick={this.saveHr}/>
            </div>
            </div>
        </>
    }

}
export default AddHR;