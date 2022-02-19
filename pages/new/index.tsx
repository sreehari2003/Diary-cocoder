import React, { useState } from "react";
import Text from "../../components/newPage/Text";
import styles from "../../styles/new.module.scss";
import Preview from "../../components/newPage/Preview";
import Button from "@mui/material/Button";

const Index = () => {
  const [text, setText] = useState<string>("");
  const getText = (el: string) => {
    setText(el);
  };
  return (
    <>
      <form>
        <div className={styles.bd}>
          <nav>
            <h2>Diary</h2>
            <h2>Preview</h2>
          </nav>
          <div className={styles.hd}>
            <>
              <Text getText={getText} />
              <Preview text={text} />
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
