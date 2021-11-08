import React from "react";
import Doug from "../../materials/starter-code/assets/crew/image-douglas-hurley.webp";
import Mark from "../../materials/starter-code/assets/crew/image-mark-shuttleworth.webp";
import Victor from "../../materials/starter-code/assets/crew/image-victor-glover.webp";
import Anoush from "../../materials/starter-code/assets/crew/image-anousheh-ansari.webp";
import classes from "./CrewImg.module.scss";
function CrewImg(props) {
  return (
    <div className={classes.crew}>
      {props.destination === 0 ? <img src={Doug} alt="person" /> : ""}
      {props.destination === 1 ? <img src={Mark} alt="person" /> : ""}
      {props.destination === 2 ? <img src={Victor} alt="person" /> : ""}
      {props.destination === 3 ? <img src={Anoush} alt="person" /> : ""}
    </div>
  );
}

export default CrewImg;
