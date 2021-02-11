import React, { Component } from "react";
import Menu from "./Menu";
import "./Menu.css";

const availableModules = [
  {
    key: "environment",
    color: "#305b2d",
    icon: "fa-tree",
    modules: [{ key: "greenhouse gas" }, { key: "protected species" }],
  },
  {
    key: "mobility",
    color: "#066da0",
    icon: "fa-bus",
    modules: [
      { key: "walk accessibility" },
      { key: "transit accessibility" },
      { key: "travel patterns" },
    ],
  },
  {
    key: "resiliency",
    color: "#772016",
    icon: "fa-fire",
    modules: [{ key: "flood" }, { key: "fire" }, { key: "earthquake" }],
  },
];

class Header extends Component {
  render() {
    return (
      <div className="nav-brand brand">
        <div className="brand-text"> Frontend Developer Test </div>
      </div>
    );
  }
}

export default Header;
