import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <a className="m-2 navbar-brand text-white" href="/">
          Employee Management
        </a>
      </nav>
    );
  }
}

export default Header;
