import React, { useState, useContext } from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import cookieContext from "../../context/cookieContext";
import { FaGithub } from "react-icons/fa";
//components
const Navbar: React.FC = () => {
  const ctx = useContext(cookieContext);
  const log = ctx.login;
  return (
    <>
      <div className={`${classes.navbar}`}>
        <div className={classes.main}>
          <Link href="/" passHref>
            <h1 className={classes.mainChild}>NoteBook</h1>
          </Link>
          {ctx.login && (
            <Link href="/diary" passHref>
              <h3 className={classes.mainChild}>Diary</h3>
            </Link>
          )}
          {ctx.login && (
            <Link href="/profile" passHref>
              <h3 className={classes.mainChild}>Profile</h3>
            </Link>
          )}
          {ctx.login && (
            <Link href="/new" passHref>
              <h3 className={classes.mainChild}>New</h3>
            </Link>
          )}
        </div>
        <div className={`flex ${classes.sub}`}>
          {!log && (
            <Link href="/login" passHref>
              <h3 className={classes.mainChild}>Login</h3>
            </Link>
          )}
          {log && (
            <h3 className={classes.mainChild} onClick={ctx.logOut}>
              LogOut
            </h3>
          )}
          {!log && (
            <Link href="/signup" passHref>
              <h3 className={classes.mainChild}>Sign Up</h3>
            </Link>
          )}
          <a
            href="https://github.com/sreehari2003/Diary-cocoder"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ fontSize: 30 }} />
          </a>
          <HiMenuAlt2 className={classes.bur} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
