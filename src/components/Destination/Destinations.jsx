import React from "react";
import classes from "./Destinations.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import DestinationData from "./DestinationData";
function Destinations(props) {
  const animationVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={props.destination}
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.container}
      >
        <h2>{DestinationData[props.destination].destination}</h2>
        <p>{DestinationData[props.destination].description}</p>
        <div className={classes.line}></div>
        <div className={classes["km-container"]}>
          <div className={classes["small-km-container"]}>
            <div className={classes.sh2}>AVG. DISTANCE</div>
            <h4>{DestinationData[props.destination].distance}</h4>
          </div>
          <div className={classes["small-km-container"]}>
            <div className={classes.sh2}>EST. TRAVEL TIME</div>
            <h4>{DestinationData[props.destination].travelLength}</h4>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Destinations;
