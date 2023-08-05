import Link from "next/link";
import React from "react";
import styles from "./Nabvar.module.css";
import { ActiveLink } from "./ActiveLink";

export const Nabvar = () => {
  return (
    <nav className={styles["menu-container"]}>
      <h1>hola</h1>
      <ActiveLink text="home" href="/"/>
        
    
      <ActiveLink text="about" href="/about"/>
      
      <ActiveLink text="contact" href="/contact"/>
       
    </nav>
  );
};
