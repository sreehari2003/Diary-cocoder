import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TextField from "@mui/material/TextField";
import styles from "./txt.module.scss";

interface txt {
  text: string;
}

const Preview = ({ text }: txt) => {
  return (
    <>
      <style jsx>{`
        .flex {
          display: flex;
        }
        .preview {
          width: 500px;
          border: 1px solid grey;
          height: 495px;
          margin-top: 20px;
        }
      `}</style>
      <div className={styles.box}>
        <TextField
          id="outlined-basic"
          label="heading"
          variant="outlined"
          disabled={true}
        />
        <div className="preview">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Preview;
