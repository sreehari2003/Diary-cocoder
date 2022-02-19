import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

interface txt{
  text: string;
}

const Preview = ({ text }:txt) => {
  return (
    <div className="preview">

      <style jsx>{`
        .preview {
          width: 500px;
          border: 1px solid grey;
          height: 495px;
        }
      `}</style>
     <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
    </div>
  );
};

export default Preview;
