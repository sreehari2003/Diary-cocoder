import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./txt.module.scss";

interface txt {
  text: string;
  heading: string;
}

const Preview = ({ text, heading }: txt) => {
  return (
    <>
      <style jsx>{`
        .preview {
          width: 500px;
          border: 1px solid grey;
          height: 495px;
          margin-top: 20px;
        }
        .col {
          color: black !important;
          border: 1px solid grey;
          height: 55px;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <div className={styles.box}>
        <div className="col">
          <h2>{heading}</h2>
        </div>
        <div className="preview">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Preview;
