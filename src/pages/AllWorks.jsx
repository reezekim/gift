import React from "react";
import styles from "../css/AllWorks.module.css";

export default function AllWorks() {
  return (
    <section id={styles.works} className={styles.section}>
      <div className={styles.intro}>
        <h1 className={styles.title}>All Projects</h1>
        {/* <p className={styles.desc}>총 4개의 프로젝트를 진행했습니다.</p> */}
      </div>
    </section>
  );
}
