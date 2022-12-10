import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["nav"]}>
        <p className={styles["nav__title"]}>MyTest App</p>
    </nav>
  );
};

export default Navbar;
