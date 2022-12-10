import React from "react";
import styles from "./card.module.css";
import { useGetAllMoviesQuery } from "../../redux/services/movie";

const MovieCard = () => {
  const { data, isFetching, error } = useGetAllMoviesQuery();
  return (
    <>
      {isFetching ? (
        <p>Loading....</p>
      ) : (
        <div className={styles["card"]}>
          <h3>{data?.Genre.split(" ")[0] ?? ""}</h3>
          <div className={styles["card__wrapper"]}>
            <p>{data?.Title}</p>
            <img src={data?.Poster} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
