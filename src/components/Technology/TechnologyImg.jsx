import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import launchL from "../../materials/starter-code/assets/technology/image-launch-vehicle-landscape.jpg";
import launchP from "../../materials/starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleL from "../../materials/starter-code/assets/technology/image-space-capsule-landscape.jpg";
import capsuleP from "../../materials/starter-code/assets/technology/image-space-capsule-portrait.jpg";
import portL from "../../materials/starter-code/assets/technology/image-spaceport-landscape.jpg";
import portP from "../../materials/starter-code/assets/technology/image-spaceport-portrait.jpg";
import classes from "./TechnologyImg.module.scss";
function TechnologyImg(props) {
  const tablet = useMediaQuery("(max-width:1024px)");
  return (
    <div>
      {tablet === true ? (
        <div className={classes.container}>
          {" "}
          {props.technology === 1 ? <img src={launchL} alt="technology" /> : ""}
          {props.technology === 2 ? (
            <img src={capsuleL} alt="technology" />
          ) : (
            ""
          )}
          {props.technology === 3 ? <img src={portL} alt="technology" /> : ""}
        </div>
      ) : (
        <div className={classes.container}>
          {props.technology === 1 ? <img src={launchP} alt="technology" /> : ""}
          {props.technology === 2 ? (
            <img src={capsuleP} alt="technology" />
          ) : (
            ""
          )}
          {props.technology === 3 ? <img src={portP} alt="technology" /> : ""}
        </div>
      )}
    </div>
  );
}

export default TechnologyImg;
