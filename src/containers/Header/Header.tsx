import React, { useState } from "react";
import styles from "./Header.module.css";
import Profile from "../../components/Profile/Profile";

type HeaderProps = {
  name: string;
};

export default function Header({ name }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_inner}>
        <section className={`w-4/12`}>
          <img
            className={styles.header_logo}
            src="/assets/logo.svg"
            alt="logo"
          />
        </section>
        <section
          className={`hidden sm:hidden md:flex w-4/12 justify-center ${styles.inner_nav}`}
        >
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </section>
        <section className={` flex justify-center md:hidden w-4/12`}>
          <nav>
            <div className={`flex text-gray-700`} onClick={handleDropdown}>
              <h3 className={`text-sm`}>Menu</h3>
              <div
                className={`ml-2 flex items-center ${
                  isOpen === true ? "rotate" : "noRotate"
                }`}
              >
                <img
                  className={`opacity-70`}
                  src="/assets/down_arrow.svg"
                  alt="dropdown"
                />
              </div>
            </div>
            {isOpen === true ? (
              <ul
                className={`absolute shadow-md top-24 bg-white w-full left-0`}
              >
                <li
                  className={`h-10 flex border-b hover:bg-primary hover:text-white items-center`}
                >
                  <a className={`px-4`} href="#">
                    Home
                  </a>
                </li>
                <li
                  className={`h-10 flex border-b hover:bg-primary hover:text-white items-center`}
                >
                  <a className={`px-4`} href="#">
                    About
                  </a>
                </li>
                <li
                  className={`h-10 flex hover:bg-primary hover:text-white items-center`}
                >
                  <a className={`px-4`} href="#">
                    Contact
                  </a>
                </li>
              </ul>
            ) : null}
          </nav>
        </section>
        <section className={`w-3/12 flex justify-end`}>
          <Profile name={name} />
        </section>
      </div>
    </div>
  );
}
