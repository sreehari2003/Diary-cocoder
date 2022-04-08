import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./txt.module.scss";
import classes from "./preview.module.scss";

interface txt {
  text: string;
  heading: string;
}

const Preview = ({ text, heading }: txt) => {
  return (
    <>
      <div className={styles.box}>
        <div className={classes.col}>
          <h2>{heading}</h2>
        </div>
        <div className={classes.preview}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Preview;
