import styles from "../../styles/id.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import Error from "next/error";

interface dt {
  _id: string;
  date: string;
  text: string;
  heading: string;
}
const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setDatac] = useState<dt>();
  const date = moment(data?.date).format("DD-MMM-YYYY");

  const link = `https://diary-app-cocoder.herokuapp.com/api/diary/${cookie.get(
    "id"
  )}`;
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(link, {
          headers: {
            authorization: `Bearer ${cookie.get("jwt")}`,
          },
        });
        const dry = res.data.data.diary;
        const el = dry.find((el: dt) => {
          return el._id == id;
        });
        if (!el) {
          router.push("/404");
        } else {
          setDatac(el);
        }
      } catch (e) {
        // alert(e);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (data) {
    return (
      <div className={`${styles.box} flex`}>
        <div className={styles.h1Box}>
          <h1>{data?.heading}</h1>
        </div>
        <div className={styles.date}>{date}</div>
        <div className={styles.textBox}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data?.text}
          </ReactMarkdown>
        </div>
      </div>
    );
  }

  return <Error statusCode={404} />;
};
export default Index;
