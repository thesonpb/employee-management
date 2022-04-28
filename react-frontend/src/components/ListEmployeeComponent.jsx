import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter((em) => em.id !== id),
      });
    });
  }

  viewEmployee(id) {
    EmployeeService.getEmployeeById(id).then((res) => {
      window.location.replace(`/employees/${id}`);
    });
  }
  render() {
    return (
      <div>
        <a href="/add-employee" className="btn btn-success mt-2">
          Add Employee
        </a>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td
                    onClick={() => this.viewEmployee(employee.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    {employee.firstName}{" "}
                  </td>
                  <td
                    onClick={() => this.viewEmployee(employee.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    {employee.lastName}
                  </td>
                  <td
                    onClick={() => this.viewEmployee(employee.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    {employee.emailId}
                  </td>
                  <td>
                    <a
                      href={`/update-employee/${employee.id}`}
                      className="btn btn-info"
                    >
                      Update
                    </a>
                    <button
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                      style={{ marginLeft: 10 }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
