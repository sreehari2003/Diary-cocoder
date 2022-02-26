import React, { useState, useRef, useEffect } from "react";
import Text from "../../components/newPage/Text";
import styles from "../../styles/new.module.scss";
import Preview from "../../components/newPage/Preview";
import Button from "@mui/material/Button";
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
    const sendData = async () => {
      try {
        const data = {
          text: text,
          heading: hd,
        };
        console.log(data.heading);
        //need to change api link
        const apiLink = `http://localhost:4000/api/diary/${cookie.get("id")}`;
        const res = await fetch(apiLink, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${cookie.get("jwt")}`,
          },
        });
        const response = await res.json();
        if (!res.ok) throw new Error(response.message);
      } catch (e) {
        alert(e);
      }
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
