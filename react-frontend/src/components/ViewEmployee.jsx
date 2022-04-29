import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  componentDidMount() {
    let url = window.location.href.split("/");
    let urlId = url[url.length - 1];
    EmployeeService.getEmployeeById(urlId).then((res) => {
      let employee = res.data;
      this.setState({
        id: urlId,
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
      });
    });
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      window.location.replace("/employees");
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Employee Details</h3>
          <div className="card-body">
            <div className="row ">
              <label className="fw-bold"> First Name: </label>
              <div> {this.state.firstName}</div>
            </div>
            <div className="row">
              <label className="fw-bold"> Last Name: </label>
              <div> {this.state.lastName}</div>
            </div>
            <div className="row">
              <label className="fw-bold"> Email ID: </label>
              <div> {this.state.emailId}</div>
            </div>
            <a
              href={`/update-employee/${this.state.id}`}
              className="btn btn-info mt-2"
            >
              Update
            </a>
            <button
              onClick={() => this.deleteEmployee(this.state.id)}
              className="btn btn-danger mt-2"
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployee;
