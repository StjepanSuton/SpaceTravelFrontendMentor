import React from "react";
import classes from "./CrewHome.module.scss";
import { motion } from "framer-motion";
import Crew from "./Crew";
function CrewHome() {
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
      <Crew />
    </motion.div>
  );
}

export default CrewHome;
