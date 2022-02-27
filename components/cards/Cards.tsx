import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import styles from "./card.module.scss";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import cookie from "js-cookie";
import { useRouter } from "next/router";
interface dt {
  _id: string;
  date: string;
  text: string;
  heading: string;
}

const Cards = () => {
  const router = useRouter();
  useEffect(() => {
    const token = cookie.get("jwt");
    if (!token) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setDatac] = useState<dt[]>();
  console.log(data);
  const link = `http://localhost:4000/api/diary/${cookie.get("id")}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(link, {
          headers: {
            authorization: `Bearer ${cookie.get("jwt")}`,
          },
        });
        setLoading(false);
        if (!res.data.ok) throw new Error("Could not finish request");
        setDatac(res.data.data.diary);
      } catch (e) {
        // alert(e);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const route = (el: string) => {
    router.push(`/diary/${el}`);
  };

  const img =
    "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  if (loading) {
    return (
      <>
        <div className={`${styles.box} flex`} style={{ width: 300 }}>
          <CircularProgress disableShrink />
        </div>
        <div className={`${styles.box} flex`} style={{ width: 300 }}>
          <CircularProgress disableShrink />
        </div>
        <div className={`${styles.box} flex`} style={{ width: 300 }}>
          <CircularProgress disableShrink />
        </div>
        <div className={`${styles.box} flex`} style={{ width: 300 }}>
          <CircularProgress disableShrink />
        </div>
        <div className={`${styles.box} flex`} style={{ width: 300 }}>
          <CircularProgress disableShrink />
        </div>
      </>
    );
  }

  return (
    <>
      {data?.map((el, index) => {
        const dateObj = new Date(el.date);
        const date = moment(dateObj).format("DD-MMM-YYYY");
        return (
          <div className={styles.box} key={10}>
            <Image
              src="https://source.unsplash.com/random/?diary"
              width={300}
              height={450}
              key={10}
              alt={"a pic of diary"}
              className={styles.img}
            />
            <div className={styles.box_sub}>
              <h2>{el.heading}</h2>
              <h2>{date}</h2>
            </div>
            <div className={styles.info}>
              <Button variant="contained" onClick={() => route(el._id)}>
                Read Diary
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
