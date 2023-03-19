import React from "react";
import styles from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
// import { BiGift } from "react-icons/bi";
import { IoGiftSharp, IoMenu } from "react-icons/io5";
// import { useRef } from "react";

export default function Navbar() {
  // const navbar = document.querySelector("#navbar");
  // const navHeight = navbar.getBoundingClientRect().height;
  // document.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  //   console.log(navHeight);
  // });

  return (
    <header id={styles.navbar}>
      <button className={styles.toggle}>
        <IoMenu className={styles.icon} />
      </button>
      <nav className={styles.menu}>
        <Link
          to="/works"
          className={`${styles.item} ${styles.active}`}
          data-link="#works"
        >
          Works
        </Link>
        <Link to="/about" className={styles.item} data-link="#About">
          About
        </Link>
        <a href="#" className={styles.item}>
          Resume
        </a>
        <a href="#" className={styles.item} data-link="#Contact">
          Contact
        </a>
      </nav>
      <Link to="/" className={styles.logo} data-link="#home">
        <IoGiftSharp className={styles.icon} />
      </Link>
    </header>
  );
}
