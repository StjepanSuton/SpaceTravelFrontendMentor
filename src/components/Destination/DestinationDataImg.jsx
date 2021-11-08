import React from "react";
import moon from "../../materials/starter-code/assets/destination/image-moon.png";
import mars from "../../materials/starter-code/assets/destination/image-mars.png";
import europa from "../../materials/starter-code/assets/destination/image-europa.png";
import titan from "../../materials/starter-code/assets/destination/image-titan.png";
import classes from "./DestinationDataImg.module.scss";
import { AnimatePresence, motion } from "framer-motion";
function DestinationDataImg(props) {
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
      >
        {props.destination === 0 ? (
          <motion.img
            animate={{ opacity: [0, 1] }}
            src={moon}
            alt="planet"
            className={classes["img-planet"]}
          />
        ) : (
          ""
        )}
        {props.destination === 1 ? (
          <motion.img
            animate={{ opacity: [0, 1] }}
            src={mars}
            alt="planet"
            className={classes["img-planet"]}
          />
        ) : (
          ""
        )}
        {props.destination === 2 ? (
          <motion.img
            animate={{ opacity: [0, 1] }}
            src={europa}
            alt="planet"
            className={classes["img-planet"]}
          />
        ) : (
          ""
        )}
        {props.destination === 3 ? (
          <motion.img
            animate={{ opacity: [0, 1] }}
            src={titan}
            alt="planet"
            className={classes["img-planet"]}
          />
        ) : (
          ""
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default DestinationDataImg;
