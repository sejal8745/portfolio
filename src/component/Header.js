import React from "react";
import { IconButton } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import ExtensionIcon from "@material-ui/icons/Extension";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import CallIcon from "@material-ui/icons/Call";
import "./Header.css";
import profile from "../Assets/profile.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <img className="header-profile" src={profile} alt="profile" />
      </div>
      <div className="header-items">
        <div className="header-logo">
          <div className="header-itemlogo">
            <IconButton>
              <WorkIcon />
            </IconButton>
          </div>
          <div className="header-itemlogo">
            <IconButton>
              <ExtensionIcon />
            </IconButton>
          </div>
          <div className="header-itemlogo">
            <IconButton>
              <LocalCafeIcon />
            </IconButton>
          </div>
        </div>
        <div className="header-content">
          <div className="header-itemcontent">
            <h4>Skills & Tools</h4>
          </div>
          <div className="header-itemcontent">
            <h4>Projects</h4>
          </div>
          <div className="header-itemcontent">
            <h4>Buy me a Coffee</h4>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-contact">
          <IconButton>
            <CallIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
