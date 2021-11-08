import React from "react";
import classes from "./Home.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Home() {
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
        className={classes["content-box"]}
      >
        <div className={classes["title-box"]}>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to="/Destination">
          <button className={classes.btn}>EXPLORE</button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Home;
