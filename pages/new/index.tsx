import React, { useState, useRef } from "react";
import Text from "../../components/newPage/Text";
import styles from "../../styles/new.module.scss";
import Preview from "../../components/newPage/Preview";
import Button from "@mui/material/Button";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";

const Index = () => {
  const [text, setText] = useState<string>("");
  const [hd, seth] = useState<string>("");

  const getText = (el: string) => {
    setText(el);
  };

  const getHead = (el: string) => {
    seth(el);
  };
  const onClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (hd.length < 1 || text.length < 1) {
    //   alert("Please add heading and your diary");
    // }
    // const sendData = async () => {
    //   try {
    //     const data = {
    //       text: text,
    //       heading: hd,
    //       date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    //     };
    //     const res = axios.post();
    //   } catch (e) {}
    // };
  };
  return (
    <>
      <form onSubmit={onClick}>
        <div className={styles.bd}>
          <nav>
            <h2>Diary</h2>
            <h2>Preview</h2>
          </nav>
          <div className={styles.hd}>
            <>
              <Text getText={getText} heading={getHead} />
              <Preview text={text} heading={hd} />
            </>
          </div>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </div>
      </form>
    </>
  );
};

export default Index;
