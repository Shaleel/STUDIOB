import React, { useState } from "react";
import RichTextEditor from "react-rte";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  margin: 1rem 0;
  align-items: center;
  input {
    margin-left: 1rem;
    padding: 0.5rem;
    flex: 1;
  }
`;
const Button = styled.button`
  padding: 0.5rem;
  background-color: #03a84e;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  font-weight: bold;
  color: white;
`;
export function isImage(url) {
  return /\.(http|https|:|jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
function CreateBlog({
  newBlogContent,
  setnewBlogContent,
  setpreview,
  title,
  settitle,
  banner,
  setbanner,
}) {
  const onChange = (input) => {
    setnewBlogContent(input);
    setpreview(input.toString("html"));
  };
  return (
    <div>
      <h1>Create new Blog</h1>
      <Row>
        <label>Title</label>
        <input value={title} onChange={(e) => settitle(e.target.value)}></input>
      </Row>
      <Row>
        <label>Banner Image URL</label>
        <input
          value={banner}
          onChange={(e) => setbanner(e.target.value)}
        ></input>
      </Row>
      {banner && !isImage(banner) && (
        <p style={{ color: "red" }}>The url does not contain an image</p>
      )}
      <RichTextEditor value={newBlogContent} onChange={onChange} />

      <Button onClick={() => alert("Published")}>Publish</Button>
    </div>
  );
}

export default CreateBlog;
