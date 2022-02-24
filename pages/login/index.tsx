import React, { useRef } from "react";
import classes from "../../styles/login.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { red } from "@mui/material/colors";

const Login = () => {
  const mail = useRef<HTMLInputElement>();
  const pass = useRef<HTMLInputElement>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mail.current && pass.current) {
      if (mail.current.value.length < 1 || pass.current.value.length < 1) {
        alert("Please enter all input");
      } else {
        const dt = {
          email: mail.current.value,
          password: pass.current.value,
        };
        const link = "http://localhost:4000/api/auth/login";
        const sendData = async () => {
          try {
            const res: any = await fetch(link, {
              method: "POST",
              body: JSON.stringify(dt),
              headers: {
                "Content-Type": "application/json",
              },
            });

            const data = await res.json();
            console.log(data);
            if (!data?.ok) throw new Error(data.message);
          } catch (e) {
            alert(e);
          }
        };
        sendData();
      }
    }
  };

  return (
    <div className={`${classes.login}`}>
      <h2>Login</h2>
      <div className="flex">
        <div className={`${classes.dis} flex`}>
          <form className={classes.form} onSubmit={onSubmit}>
            <div className={classes.fr}>
              <label htmlFor="outlined-search">E-Mail</label>
              <TextField
                id="outlined-search1"
                label=""
                type="text"
                variant="outlined"
                className={classes.text}
                required
                inputRef={mail}
              />
              <label htmlFor="outlined-search">password</label>
              <TextField
                id="outlined-search2"
                label=""
                type="password"
                variant="outlined"
                className={classes.text}
                required={true}
                inputRef={pass}
              />
              <Button type="submit" variant="contained">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
