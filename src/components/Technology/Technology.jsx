import React, { useState } from "react";
import classes from "./Technology.module.scss";
import TechnologyData from "./TechnologyData";
import TechnologyImg from "./TechnologyImg";
import { motion, AnimatePresence } from "framer-motion";
function Technology() {
  const [technology, setTechnology] = useState(1);

  const technologyHandler = (index) => {
    setTechnology(index);
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      <h5 className={classes.h5}>03 SPACE LAUNCH 101</h5>
      <div className={classes.container}>
        <div className={classes["small-container"]}>
          <div className={classes.btn}>
            <button
              className={
                technology === 1
                  ? classes["btn-active"]
                  : classes["btn-inactive"]
              }
              onClick={() => {
                technologyHandler(1);
              }}
            >
              1
            </button>
            <button
              className={
                technology === 2
                  ? classes["btn-active"]
                  : classes["btn-inactive"]
              }
              onClick={() => {
                technologyHandler(2);
              }}
            >
              2
            </button>
            <button
              className={
                technology === 3
                  ? classes["btn-active"]
                  : classes["btn-inactive"]
              }
              onClick={() => {
                technologyHandler(3);
              }}
            >
              3
            </button>
          </div>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={technology}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={classes["typography-container"]}
            >
              <div className={classes.sh2}>THE TERMINOLOGY ...</div>
              <h3>{TechnologyData[technology].title}</h3>
              <p>{TechnologyData[technology].content}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={technology}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.image}
          >
            <TechnologyImg technology={technology} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Technology;
