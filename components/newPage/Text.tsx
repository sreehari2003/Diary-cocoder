import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./txt.module.scss";

interface txt {
  getText: (el: string) => void;
}
const Text = ({ getText }: txt) => {
  const [text, setText] = useState("");
  getText(text);

  return (
    <>
      <div className={styles.box}>
        <TextField id="outlined-basic" label="Heading" variant="outlined" />
        <div className={styles.box_min}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={20}
            label="Enter your Diary"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Text;
