import React, { useState, useRef, useEffect } from "react";
import Text from "../../components/newPage/Text";
import styles from "../../styles/new.module.scss";
import Preview from "../../components/newPage/Preview";
import Button from "@mui/material/Button";
import moment from "moment";
import cookie from "js-cookie";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  useEffect(() => {
    const token = cookie.get("jwt");
    if (!token) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    if (hd.length < 1 || text.length < 1) {
      alert("Please add heading and your diary");
    }
    const sendData = async () => {
      try {
        const data = {
          text: text,
          heading: hd,
          date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        };
        //need to change api link
        const apiLink = `http://localhost:4000/api/diary/fdfd`;
        const res = await fetch(apiLink, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await res.json();
        if (!res.ok) throw new Error(response.message);
      } catch (e) {}
    };
    sendData();
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
