import axios from "axios";

const EMPLOYEE_BASE_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_BASE_API_URL);
  }
  createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_API_URL, employee);
  }
  getEmployeeById(id) {
    return axios.get(EMPLOYEE_BASE_API_URL + "/" + id);
  }
  updateEmployee(id, employee) {
    return axios.put(EMPLOYEE_BASE_API_URL + "/" + id, employee);
  }
  deleteEmployee(id) {
    return axios.delete(EMPLOYEE_BASE_API_URL + "/" + id);
  }
}

export default new EmployeeService();
