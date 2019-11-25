import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Hero extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <section className="hero">
        <div className="heroWrapper">
          <h1>Juice Worth the Squeeze.</h1>
          <h3>Creative Web Design by Will Ferrufino.</h3>
          <Link
            activeClass="active"
            className="btn btn-hero"
            to="section1"
            smooth={true}
            offset={-70}
            duration={500}
          >
            See the Juice
          </Link>
        </div>
      </section>
    );
  }
}
