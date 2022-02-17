import React from 'react'
import Image from "next/image";
import Button from '@mui/material/Button';
import styles from "./card.module.scss"
// import { useRouter } from "next/router"

const Cards = () => {
    const img = "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  return (
    <div className={styles.box} key={10}>
    <Image
      src={img}
      width={300}
      height={450}
      key={10}
      alt={"hello world"}
      className={styles.img}
    />
    <div className={styles.box_sub}>
      <h2>{"my good day"}</h2>
      <h2>18/02/2022</h2>
    </div>
    <div className={styles.info}>
      <Button variant="contained">Read Diary</Button>
    </div>
  </div>
  )
}

export default Cards