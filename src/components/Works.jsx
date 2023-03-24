import { useQuery } from "@tanstack/react-query";
import React from "react";
import styles from "../css/Works.module.css";
import WorkCard from "./WorkCard";
import { getWorks } from "../api/firebase";

export default function Works() {
  const { isLoading, error, data: works } = useQuery(["works"], getWorks);

  const handleClick = (e) => {
    const filter =
      e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
      return;
    }
    console.log(filter);
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div onClick={handleClick} className={styles.category}>
        <div className={styles.list}>
          <button
            className={`${styles.button} ${styles.selected}`}
            data-filter="*"
          >
            All<span className={styles.count}>4</span>
          </button>
          <button className={styles.button} data-filter="individual">
            Individual<span className={styles.count}>2</span>
          </button>
          <button className={styles.button} data-filter="activities">
            Activities<span className={styles.count}>2</span>
          </button>
          <button className={styles.button} data-filter="works">
            Works<span className={styles.count}>0</span>
          </button>
        </div>
        <hr className={styles.divide} />
      </div>

      <ul className={styles.work}>
        {works && works.map((work) => <WorkCard key={work.id} work={work} />)}
      </ul>
    </>
  );
}
