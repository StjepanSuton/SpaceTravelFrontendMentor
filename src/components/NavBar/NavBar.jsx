import React, { useState } from "react";
import classes from "./NavBar.module.scss";
import logo from "../../materials/starter-code/assets/shared/logo.svg";
import hamburger from "../../materials/starter-code/assets/shared/icon-hamburger.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavLinks from "./NavLinks";
import bigX from "../../materials/starter-code/assets/shared/icon-close.svg";

function NavBar() {
  const mobile = useMediaQuery("(max-width:450px)");

  const [isOn, setIsOn] = useState(false);

  const isOnHandler = () => {
    setIsOn(!isOn);
  };

  const isOffHandler = (index) => {
    setIsOn(index);
  };
  console.log(isOn);
  return (
    <div>
      <nav className={classes.container}>
        <img src={logo} alt="logo" className={classes.logo} />
        <div className={classes["this-line"]}></div>
        {mobile === true ? (
          <img
            src={hamburger}
            className={classes.hamburger}
            alt="hamburger"
            onClick={isOnHandler}
          />
        ) : (
          <NavLinks />
        )}
      </nav>
      {mobile === true ? (
        <div>
          <div
            className={
              isOn === true
                ? classes["container-mobile"]
                : classes["container-mobile-out"]
            }
          >
            <img
              src={bigX}
              alt="bigX"
              className={classes.bigX}
              onClick={() => isOnHandler()}
            />
            <NavLinks isOffHandler={isOffHandler} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
