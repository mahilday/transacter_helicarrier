import React from "react";
import styles from "./Header.module.css";
import Profile from "../../components/Profile/Profile";

type HeaderProps ={
    name: string 
}


export default function Header({name}: HeaderProps) {
   
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_inner}>
        <section>
          <img className={styles.header_logo} src="/assets/logo.svg" alt="logo" />
        </section>
        <section className={styles.inner_nav}>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </section>
        <section>
            <Profile name={name}/>
        </section>
      </div>
    </div>
  );
}
