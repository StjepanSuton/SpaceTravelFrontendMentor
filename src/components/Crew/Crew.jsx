import classes from "./Crew.module.scss";
import CrewData from "./CrewData";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CrewImg from "./CrewImg";

function Crew() {
  const [destination, setDestination] = useState(0);

  const destinationHandler = (index) => {
    setDestination(index);
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={classes.container}>
      <div className={classes["typography-links"]}>
        <h5>02 MEET YOUR CREW</h5>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={destination}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.typography}
          >
            <h4>{CrewData[destination].title}</h4>
            <h3>{CrewData[destination].name}</h3>
            <p>{CrewData[destination].description}</p>
          </motion.div>
        </AnimatePresence>
        <ul className={classes["ul-item"]}>
          <li
            onClick={() => destinationHandler(0)}
            className={
              destination === 0
                ? classes["li-item"]
                : classes["li-item-inactive"]
            }
          ></li>
          <li
            onClick={() => destinationHandler(1)}
            className={
              destination === 1
                ? classes["li-item"]
                : classes["li-item-inactive"]
            }
          ></li>
          <li
            onClick={() => destinationHandler(2)}
            className={
              destination === 2
                ? classes["li-item"]
                : classes["li-item-inactive"]
            }
          ></li>
          <li
            onClick={() => destinationHandler(3)}
            className={
              destination === 3
                ? classes["li-item"]
                : classes["li-item-inactive"]
            }
          ></li>
        </ul>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={destination}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CrewImg destination={destination} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Crew;
