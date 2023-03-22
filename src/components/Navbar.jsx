import React from "react";
import styles from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
import { IoGiftSharp, IoMenu } from "react-icons/io5";
import { MdLibraryAdd } from "react-icons/md";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

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
        {!user && (
          <button onClick={login} className={styles.item}>
            <TiLockClosed />
          </button>
        )}
        {user && (
          <button onClick={logout} className={styles.item}>
            <TiLockOpen />
          </button>
        )}
        {user && user.isAdmin && (
          <Link to="/works/new" className={styles.item}>
            <MdLibraryAdd />
          </Link>
        )}
      </nav>
      <Link to="/" className={styles.logo} data-link="#home">
        <IoGiftSharp className={styles.icon} />
      </Link>
    </header>
  );
}
