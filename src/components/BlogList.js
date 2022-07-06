import React from "react";
import { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  width: 100%;
`;

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  width: 100%;
  margin-bottom: 1rem;
  box-shadow: 1px 1px 10px rgb(50 50 50 / 23%);
  h4 {
    padding: 1rem;
  }
`;
const BannerImg = styled.div`
  height: 8rem;
  width: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-position: center;
`;

const EditBTN = styled.button`
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 2rem;
  background: #32d15d;
  border: none;
  color: white;
  padding: 0.5rem;
`;

const DeleteBTN = styled(EditBTN)`
  background: #eb4034;
  right: 0;
`;
function BlogList({ setsingleBlog }) {
  //TODO : List to be fetched from Firebase
  //TODO : Blog Schema same as shown below
  //TODO :Schema for Blog
  // {
  //      title:string [required] ,
  //      banner:string [required] ,
  //      content: Html Content
  // }
  const [list, setlist] = useState([
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
  ]);
  const [first, setfirst] = useState("");
  return (
    <Wrapper>
      {list.map((item, index) => (
        <Blog onClick={() => setsingleBlog(list[index])} key={index}>
          {item.banner && <BannerImg src={item.banner} />}
          <h4>{item.title}</h4>
          <EditBTN>
            <i className="fa-solid fa-pen"></i>
          </EditBTN>
          <DeleteBTN>
            <i className="fa-solid fa-trash"></i>
          </DeleteBTN>
        </Blog>
      ))}
    </Wrapper>
  );
}

export default BlogList;
