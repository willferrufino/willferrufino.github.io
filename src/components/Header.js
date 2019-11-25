import React, { Component } from "react";

import logo from "../logo.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#news">The Creative Juice&reg;</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
