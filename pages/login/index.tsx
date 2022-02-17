import React from 'react'
import TextField from '@mui/material/TextField';
import classes from "../../styles/login.module.scss";
import Button from '@mui/material/Button';

const login = () => {
  return (
    <div className={`${classes.login}`}>
    <h2>Login</h2>
<div className="flex">
<div className={`${classes.dis} flex`}>
  <form className={classes.form}>
    <div className={classes.fr}>
    <label htmlFor="outlined-search">E-Mail</label>
    <TextField
      id="outlined-search"
      label=""
      type="email"
      variant="outlined"
      className={classes.text}
      required
    />
    <label htmlFor="outlined-search">password</label>
    <TextField
      id="outlined-search"
      label=""
      type="password"
      variant="outlined"
      className={classes.text}
      required
    />
      <Button type="submit" variant="contained">Login</Button>
    </div>
  </form>
</div>
</div>
</div>
  )
}

export default login