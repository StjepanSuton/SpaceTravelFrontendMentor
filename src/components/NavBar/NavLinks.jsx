import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./NavLinks.module.scss";
import useMediaQuery from "@mui/material/useMediaQuery";

function NavLinks(props) {
  const mobile = useMediaQuery("(max-width:450px)");
  const tablet = useMediaQuery("(max-width:1024px) and (min-width: 451px)");
  console.log(mobile);
  const location = useLocation();

  return (
    <nav className={classes["link-container"]}>
      <Link
        className={
          location.pathname === "/Home" ? classes["link-active"] : classes.link
        }
        to="/Home"
        onClick={mobile ? () => props.isOffHandler(false) : () => {}}
      >
        {tablet === true ? "HOME" : "00 HOME"}
      </Link>
      <Link
        className={
          location.pathname === "/Destination"
            ? classes["link-active"]
            : classes.link
        }
        to="/Destination"
        onClick={mobile ? () => props.isOffHandler(false) : () => {}}
      >
        {tablet === true ? "DESTINATION" : "01 DESTINATION"}
      </Link>
      <Link
        className={
          location.pathname === "/Crew" ? classes["link-active"] : classes.link
        }
        to="/Crew"
        onClick={mobile ? () => props.isOffHandler(false) : () => {}}
      >
        {tablet === true ? "CREW" : "02 CREW"}
      </Link>
      <Link
        className={
          location.pathname === "/Technology"
            ? classes["link-active"]
            : classes.link
        }
        to="/Technology"
        onClick={mobile ? () => props.isOffHandler(false) : () => {}}
      >
        {tablet === true ? "TECHNOLOGY" : "03 TECHNOLOGY"}
      </Link>
    </nav>
  );
}

export default NavLinks;
