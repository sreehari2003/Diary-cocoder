import React,{ useState} from 'react'
import TextField from '@mui/material/TextField';

interface txt {
    getText:(el:string)=>void;
}
const Text = ({getText}:txt) => {
    const [text,setText] = useState("");
    getText(text);
  return (
    <div className="">
           <TextField
          id="outlined-multiline-static"
          multiline
          rows={20}
          label="Enter your Diary"
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
    </div>
  )
}

export default Text