import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 2rem;
  a {
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    margin-left: 45%;
    transition: color 0.3s ease;
    :hover {
      color: rgb(30, 144, 255);
    }
  }
`;
const List = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
const BlogWrapper = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  min-width: 25%;
  position: relative;
  border-radius: 0.5rem;
  border: 0.5px solid gray;
  display: flex;
  align-items: center;

  :hover {
    box-shadow: 1px 1px 10px rgb(30 144 255 / 23%);
  }
  img {
    height: 5rem;
    width: 6rem;
    border-radius: 0.3rem;
  }
  h4 {
    margin-left: 0.5rem;
    font-style: italic;
  }
  span {
    position: absolute;
    bottom: 0.4rem;
    right: 0.4rem;
    font-size: 0.8rem;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: gray;
  }
`;
export const Blog = ({ blog }) => {
  return (
    <BlogWrapper>
      <img src={blog.banner} />
      <h4>{blog.title}</h4>

      <span>June 11</span>
    </BlogWrapper>
  );
};
const blogList = [
  {
    title: "Title1", //Title of the Blog
    banner:
      "https://images.adsttc.com/media/images/5891/2fef/e58e/ceb7/6c00/005d/large_jpg/01_One_on_one_Moreno_Architecture.jpg?1485909986", //image url of blog banner
    content: "<p>HTML content of the blog 1</p>",
  },
  {
    title: "Title2", //Title of the Blog
    banner:
      "https://images.adsttc.com/media/images/5891/2fef/e58e/ceb7/6c00/005d/large_jpg/01_One_on_one_Moreno_Architecture.jpg?1485909986", //image url of blog banner
    content: "<p>HTML content of the blog 2</p>",
  },
  {
    title: "Title3", //Title of the Blog
    banner:
      "https://images.adsttc.com/media/images/5891/2fef/e58e/ceb7/6c00/005d/large_jpg/01_One_on_one_Moreno_Architecture.jpg?1485909986", //image url of blog banner
    content: "<p>HTML content of the blog 3</p>",
  },
];
function Blogs() {
  return (
    <Wrapper>
      <h2>BLOGS</h2>
      <List>
        {blogList.map((blog, idx) => (
          <Blog key={idx} blog={blog} />
        ))}
      </List>
      <a href="/blogs">More Blogs...</a>
    </Wrapper>
  );
}

export default Blogs;
