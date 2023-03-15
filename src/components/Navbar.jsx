import React from "react";
import styles from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
// import { BiGift } from "react-icons/bi";
import { IoGiftSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <header>
      <button>
        <IoGiftSharp />
      </button>
      <Link to="/">Gift of You</Link>
      <nav>
        <Link to="/works">Works</Link>
        <Link to="/about">About</Link>
        <a href="#">Resume</a>
      </nav>
      <a href="#">Contact</a>
    </header>
  );
}
