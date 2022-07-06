import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const FormWrapper = styled.div`
  width: 25%;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

const Label = styled.label``;
const Input = styled.input`
  padding: 0.5rem;
  width: 90%;
`;
const Error = styled.p`
  color: red;
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
function Login({ isLoggedin, setisLoggedin }) {
  const [error, seterror] = useState(null);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <Wrapper>
      <FormWrapper>
        <h2>Login</h2>
        {error && <Error>{error}</Error>}
        <Label>Username : </Label>
        <Input
          value={username}
          onChange={(e) => setusername(e.target.value)}
          type="text"
          placeholder="Admin Username"
        />
        <br></br>
        <br></br>
        <Label>Password : </Label>
        <Input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Admin Password"
        />
        <br></br>
        <br></br>
        <Button onClick={() => setisLoggedin(!isLoggedin)}>Login</Button>
      </FormWrapper>
    </Wrapper>
  );
}

export default Login;
