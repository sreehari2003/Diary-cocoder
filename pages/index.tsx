import React, { useContext, useEffect } from "react";
import styles from "../styles/index.module.scss";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import cookieContext from "../context/cookieContext";

const Index = () => {
  const router = useRouter();
  const ctx = useContext(cookieContext);
  useEffect(() => {
    if (ctx.login) {
      router.push("/diary");
    }
  });

  return (
    <div className={styles.bg}>
      <h1>NoteBook</h1>
      <span className={styles.span}>Note it Down!</span>
      <div className={styles.btn}>
        <Link href="/login" passHref>
          <Button variant="contained">Login</Button>
        </Link>
        <span className={styles.or}>or</span>
        <Link href="/signup" passHref>
          <Button variant="contained">SignUp</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
