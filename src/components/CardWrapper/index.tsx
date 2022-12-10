import React from "react";
import styles from "./card-wrapper.module.css";
import MovieCard from "../Card";

const CardWrapper = () => {
  return (
    <div className={styles["cardWrapper"]}>
      <MovieCard />
    </div>
  );
};

export default CardWrapper;
