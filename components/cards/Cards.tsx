import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import styles from "./card.module.scss";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { AiFillDelete } from "react-icons/ai";
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
  const [empty, setEmpty] = useState<boolean>(false);
  const [data, setDatac] = useState<dt[]>();
  const link = `https://diary-app-cocoder.herokuapp.com/api/diary/${cookie.get(
    "id"
  )}`;
  const deleteDiary = async (id: string) => {
    try {
      const res = await axios.delete(link, {
        headers: {
          authorization: `Bearer ${cookie.get("jwt")}`,
        },
        data: {
          source: id,
        },
      });
      console.log(res);
    } catch (e) {
      console.log("deleted");
    }
  };

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
        if (res.data.data.diary.length < 1) {
          setLoading(false);
          setEmpty(true);
        } else {
          setDatac(res.data.data.diary);
        }
      } catch (e) {
        // alert(e);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteDiary]);

  const route = (el: string) => {
    router.push(`/diary/${el}`);
  };

  const img = "https://source.unsplash.com/random";

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
  if (loading || empty) {
    return (
      <>
        <div className={`flex`} style={{ textAlign: "center" }}>
          <h2>You dont have any diary to show</h2>
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
              src={`https://source.unsplash.com/random/${index * 10}`}
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
              <Button
                variant="contained"
                onClick={() => route(el._id)}
                className={styles.btn}
              >
                Read Diary
              </Button>
              <Button
                variant="contained"
                className={styles.i}
                onClick={() => deleteDiary(el._id)}
              >
                <AiFillDelete style={{ fontSize: "20px" }} />
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
