import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../../styles/sign.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

// Interface res {
//    ok: boolean,

// }
interface eror {
  ok: boolean;
  res: {
    name: string;
    message: string;
  };
}

const SignUp = () => {
  const router = useRouter();

  const name = useRef<HTMLInputElement>();
  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();
  const confirmPassword = useRef<HTMLInputElement>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      name &&
      name.current &&
      email &&
      email.current &&
      password &&
      password.current &&
      confirmPassword &&
      confirmPassword.current
    ) {
      const user = name.current.value;
      const pass = password.current.value;
      const mail = email.current.value;
      const confirm = confirmPassword.current.value;

      if (user.length < 1 || pass.length < 1 || confirm.length < 1) {
        alert("Please enter the input fields");
      } else if (!(pass === confirm)) {
        alert("Please enter correct password");
      } else {
        const Info = {
          password: pass,
          email: mail,
          username: user,
        };

        const sendData = async () => {
          const link = "http://localhost:4000/api/auth";
          try {
            const res: any = await axios.post(link, Info);
            if (!res.data.ok) throw new Error();
            router.push("/new");
          } catch (err: any) {
            alert(err);
          }
        };
        sendData();
      }
    }
  };
  return (
    <>
      <div className={styles.bdy}>
        <h1>Sign Up</h1>
        <form onSubmit={onSubmit}>
          <div className={styles.txt}>
            <TextField
              id="outlined-basic"
              label="userName"
              variant="outlined"
              required={true}
              inputRef={name}
            />
          </div>
          <div className={styles.txt}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              required={true}
              inputRef={email}
            />
          </div>
          <div className={styles.txt}>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              required={true}
              inputRef={password}
              type="password"
            />
          </div>
          <div className={styles.txt}>
            <TextField
              id="outlined-basic"
              label="confirm password"
              variant="outlined"
              required={true}
              inputRef={confirmPassword}
              type="password"
            />
          </div>
          <div className={styles.txts}>
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
