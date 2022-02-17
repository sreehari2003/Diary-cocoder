import React from 'react'
import Head from "next/head";
import classes from "../../styles/diary.module.scss"
import Cards from "../../components/cards/Cards"
import { GrFormAdd} from "react-icons/gr";
import Button from '@mui/material/Button';
import Link from "next/link";


const index = () => {
  return (
  <>
    <div className={classes.bd}>
    <Head>
      <title>campgrounds</title>
    </Head>
    <div className={`${classes.banner} overlay`}>
      <h1>Welcome to the notebook</h1>
      <h4>Write Your heart out</h4>
      </div>
     <div className={classes.camp}>
          <Cards/>
         </div> 
      <div className={classes.add}>
    <Link href="/new" passHref>
    <Button type="submit" variant="contained" className={classes.bt}>
          <GrFormAdd/>
      </Button>
    </Link>

      </div>
      </div>
  </>
  )
}

export default index