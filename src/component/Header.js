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
      <img className="header-profile" src={profile} alt="profile"/>
      </div>
      <div className="header-items">
        <div className="header-itemOne">
          <IconButton>
            <WorkIcon />
          </IconButton>
        </div>
        <div className="header-itemOne">
          <IconButton>
            <ExtensionIcon />
          </IconButton>
        </div>
        <div className="header-itemOne">
          <IconButton>
            <LocalCafeIcon />
          </IconButton>
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
