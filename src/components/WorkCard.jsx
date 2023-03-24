import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/WorkCard.module.css";

export default function WorkCard({
  work,
  work: { id, type, title, category, image },
}) {
  const navigate = useNavigate();
  return (
    <li
      className={styles.card}
      onClick={() => {
        navigate(`/works/${id}`, { state: { work } });
      }}
      data-type={type}
    >
      <div className={styles.desc}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
      </div>
      <img src={image} alt={title} className={styles.img} />
    </li>
  );
}

// What I learned, what I thought about, problems, solutions, and implementation.
