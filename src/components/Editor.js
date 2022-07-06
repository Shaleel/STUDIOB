import React, { useState } from "react";
import styled from "styled-components";
import RichTextEditor from "react-rte";
import { BannerImg } from "./WriteBlog";
import { isImage } from "./CreateBlog";

const Wrapper = styled.div`
  flex: 0.7;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid gray;
`;
const TitleInput = styled.input`
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
`;
const BannerInput = styled.input`
  padding: 0.5rem;
`;
function Editor({ singleBlog, setSingleBlog }) {
  const [title, settitle] = useState(singleBlog?.title);
  const [banner, setbanner] = useState(singleBlog?.banner);
  const editorVal = RichTextEditor.createValueFromString(
    singleBlog?.content,
    "html"
  );
  const onChange = (input) => {
    setSingleBlog(input);
  };
  return (
    <Wrapper>
      {singleBlog && (
        <TitleInput
          value={singleBlog.title}
          onChange={(e) => settitle(e.target.value)}
        />
      )}
      <br></br>
      {singleBlog && (
        <BannerInput
          value={singleBlog.banner}
          onChange={(e) => setbanner(e.target.value)}
        />
      )}
      {banner && !isImage(banner) && (
        <p style={{ color: "red" }}>The url does not contain an image</p>
      )}
      {singleBlog && <BannerImg src={singleBlog.banner} />}
      {singleBlog && <RichTextEditor value={editorVal} onChange={onChange} />}
      {!singleBlog && <p style={{ textAlign: "center" }}>No Blog Selected</p>}
    </Wrapper>
  );
}

export default Editor;
