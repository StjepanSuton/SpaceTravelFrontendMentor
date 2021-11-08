import React, { useState } from "react";
import classes from "./DestinationHome.module.scss";
import Destinations from "./Destinations";
import { motion } from "framer-motion";
import DestinationDataImg from "./DestinationDataImg";
function DestinationHome() {
  const [destination, setDestination] = useState(0);

  const destinationHandler = (index) => {
    setDestination(index);
  };

  const containerVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
    exit: {
      x: "100vw",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const homeVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes["bg-img"]}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes["all-container"]}
      >
        <h5>01 PICK YOUR DESTENATION</h5>

        <div className={classes["small-container"]}>
          <div>
            <DestinationDataImg destination={destination} />
          </div>
          <div className={classes["typography-container"]}>
            <div className={classes["btn-container"]}>
              <button
                onClick={() => destinationHandler(0)}
                className={
                  destination === 0 ? classes["btn-active"] : classes.btn
                }
              >
                MOON
              </button>
              <button
                onClick={() => destinationHandler(1)}
                className={
                  destination === 1 ? classes["btn-active"] : classes.btn
                }
              >
                MARS
              </button>
              <button
                onClick={() => destinationHandler(2)}
                className={
                  destination === 2 ? classes["btn-active"] : classes.btn
                }
              >
                EUROPA
              </button>
              <button
                onClick={() => destinationHandler(3)}
                className={
                  destination === 3 ? classes["btn-active"] : classes.btn
                }
              >
                TITAN
              </button>
            </div>
            <div>
              <Destinations destination={destination} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default DestinationHome;
