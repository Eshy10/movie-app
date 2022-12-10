import React from "react";
import styles from "./card.module.css";

// interface CardProps {
//   imageUrl: string;
//   title: string
// }

const MovieCard = () => {
  return (
    <div className={styles["card"]}>
      <h3>Movie Title</h3>
      <div className={styles["card__wrapper"]}>
      <p>Movie name</p>
      </div>
    </div>
  );
};

export default MovieCard;
