import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from "../../styles/sign.module.scss"
import { style } from '@mui/system';

const signUp = () => {
  return (
 <>
    <div className={styles.bdy}>
    <h1>Sign Up</h1>
       <form >
       <div className={styles.txt}>
        <TextField id="outlined-basic" label="Name" variant="outlined" required={true}/>
        </div>
        <div className={styles.txt}>
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required={true} />
        </div>
        <div className={styles.txt}>
        <TextField id="outlined-basic" label="password" variant="outlined" required={true}/>
        </div>
        <div className={styles.txt}>
        <TextField id="outlined-basic" label="confirm password" variant="outlined" required={true}/>
        </div>
        <div className={styles.txts}>
        <Button type="submit" variant="contained">Sign Up</Button>
        </div>
       </form>
    </div>
 </>
  )
}

export default signUp