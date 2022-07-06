import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./Header";
import parse from "html-react-parser";
import { BannerImg } from "./WriteBlog";
import { Blog } from "./Blogs";
import Footer from "./Footer";

const Header = styled.div`
  background: rgb(255, 255, 255, 85%);
  padding: 1rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  margin-bottom: 2rem;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
const MainContent = styled.div`
  padding-left: 15%;
  padding-top: 2rem;
  padding-right: 1rem;
  flex: 1;
  border-right: 1px solid lightgray;
  @media only screen and (max-width: 900px) {
    padding-left: 1rem;
  }
`;
const BlogTitle = styled.h1`
  margin-bottom: 0.5rem;
`;
const CreatedDate = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: gray;
  text-align: right;
`;
const BlogContent = styled.div`
  font-style: italic;
`;

const List = styled.div`
  position: sticky;
  padding: 1rem;
  top: 3rem;
  flex: 0.5;
  @media only screen and (max-width: 720px) {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid black;
  }
`;
const singleBlog = {
  title: "Title1", //Title of the Blog
  banner:
    "https://images.adsttc.com/media/images/5891/2fef/e58e/ceb7/6c00/005d/large_jpg/01_One_on_one_Moreno_Architecture.jpg?1485909986", //image url of blog banner
  content:
    "<p>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p><p>Why do we use it?<br></br>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br></br> Where does it come from?<br></br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.<br></br>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br></br>Where can I get some?<br></br>" +
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>",
};

function BlogPage() {
  const { blogTitle } = useParams(); //TODO : use this title to fetch blog from database

  return (
    <div>
      <Header>
        <Logo>
          STUDIO
          <span>B</span>
          &nbsp; BLOGS
        </Logo>
      </Header>
      <Main>
        <MainContent>
          <BannerImg src={singleBlog.banner} />
          <BlogTitle>{singleBlog.title}</BlogTitle>
          <CreatedDate>June 11</CreatedDate>

          <BlogContent>{parse(singleBlog.content)}</BlogContent>
        </MainContent>
        <List>
          <a href={`/blogs/${singleBlog.title}`}>
            <Blog blog={singleBlog} />
          </a>
        </List>
      </Main>
      <Footer />
    </div>
  );
}

export default BlogPage;
