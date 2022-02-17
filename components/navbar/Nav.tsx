import React, { useState } from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
//components
const Navbar:React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  // const [scroll, setScroll] = useState<boolean>(false);
  // window.onscroll = () => {
  //   setScroll(window.pageYOffset > 10 ? true : false);
  //   return () => (window.onscroll = null);
  // };
  const toggle = () => {
    setShow((el) => !el);
  };

  return (
    <>
      <div className={`${classes.navbar}`} >
        <div className={classes.main}>
          <Link href="/" passHref>
            <h1 className={classes.mainChild}>NoteBook</h1>
          </Link>
          <Link href="/diary" passHref>
            <h3 className={classes.mainChild}>Diary</h3>
          </Link>
          <Link href="/profile" passHref>
            <h3 className={classes.mainChild}>Profile</h3>
          </Link>
          <Link href="/new" passHref>
            <h3 className={classes.mainChild}>New</h3>
          </Link>
        </div>
        <div className={`flex ${classes.sub}`}>
          <Link href="/login" passHref>
            <h3 className={classes.mainChild}>Login</h3>
          </Link>
          <Link href="/signup" passHref>
            <h3 className={classes.mainChild}>Sign Up</h3>
          </Link>
          <HiMenuAlt2 className={classes.bur} onClick={toggle} />
        </div>
      </div>
    </>
  );
};

export default Navbar;