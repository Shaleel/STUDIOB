import React, { useState } from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import Login from "./Login";
import CreateBlog from "./CreateBlog";
import BlogList from "./BlogList";
import RichTextEditor from "react-rte";
import Editor from "./Editor";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
`;

const SideMenu = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex: 0.7;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid gray;
`;
const MenuItem = styled.button`
  border: none;
  background: transparent;
  font-size: 1.5rem;
  margin-top: 1rem;
  border-bottom: 1px solid lightgray;
  padding: 1rem;
`;
const PreviewWrapper = styled(Main)`
  font-family: "Roboto", "sans-serif";
`;
export const BannerImg = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: lightgray;
  margin-bottom: 1rem;

  ${({ src }) =>
    !src &&
    `::after{
    content : "No Banner image ";
  }`}
`;
const Preview = ({ content, title, banner }) => {
  return (
    <PreviewWrapper>
      <h3 style={{ color: "gray", marginBottom: "1rem" }}>Preview</h3>
      <BannerImg src={banner} />
      <h1 style={{ marginBottom: "1rem" }}>{title}</h1>
      {parse(content)}
    </PreviewWrapper>
  );
};

function WriteBlog() {
  const [val, setval] = useState(null);
  const [isLoggedin, setisLoggedin] = useState(false);
  const [preview, setpreview] = useState("");
  const [title, settitle] = useState("Blog Title Goes here");
  const [banner, setbanner] = useState(null);
  const [newBlogContent, setnewBlogContent] = useState(
    RichTextEditor.createEmptyValue()
  );
  const [menu, setmenu] = useState(0);
  const [singleBlog, setsingleBlog] = useState(null);
  return (
    <div>
      {isLoggedin ? (
        <Wrapper>
          <SideMenu>
            <MenuItem onClick={() => setmenu(0)}>Create Blog</MenuItem>
            <MenuItem onClick={() => setmenu(1)}>List Blogs</MenuItem>
          </SideMenu>
          <Main>
            {menu === 0 && (
              <CreateBlog
                banner={banner}
                setbanner={setbanner}
                title={title}
                settitle={settitle}
                newBlogContent={newBlogContent}
                setnewBlogContent={setnewBlogContent}
                setpreview={setpreview}
              ></CreateBlog>
            )}
            {menu === 1 && <BlogList setsingleBlog={setsingleBlog}></BlogList>}
          </Main>
          {menu === 0 && (
            <Preview content={preview} title={title} banner={banner} />
          )}
          {menu === 1 &&
            (singleBlog ? (
              <Editor singleBlog={singleBlog} setsingleBlog={setsingleBlog} />
            ) : (
              <p style={{ textAlign: "center" }}>No Blog Selected</p>
            ))}
        </Wrapper>
      ) : (
        <Login isLoggedin={isLoggedin} setisLoggedin={setisLoggedin} />
      )}
    </div>
  );
}

export default WriteBlog;
