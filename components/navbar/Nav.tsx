import React, { useState, useEffect } from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import cookie from "js-cookie";
//components
const Navbar: React.FC = () => {
  const [cok, setCok] = useState<boolean>(false);
  useEffect(() => {
    const cookoe = cookie.get("jwt-cookie");
    if (cookoe) {
      setCok(true);
    }
  }, []);
  const [show, setShow] = useState<boolean>(false);
  // const [scroll, setScroll] = useState<boolean>(false);
  // window.onscroll = () => {
  //   setScroll(window.pageYOffset > 10 ? true : false);
  //   return () => (window.onscroll = null);
  // };
  const toggle = () => {
    setShow((el) => !el);
  };
  const logOut = () => {
    cookie.remove("jwt");
  };

  return (
    <>
      <div className={`${classes.navbar}`}>
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
          {!cok && (
            <Link href="/login" passHref>
              <h3 className={classes.mainChild}>Login</h3>
            </Link>
          )}
          {cok && <h3>LogOut</h3>}
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
