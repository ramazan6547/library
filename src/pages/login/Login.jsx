import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser("ramazan");
    sessionStorage.setItem("user", "ramazan");
    navigate("/");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
        <Header>Login Here</Header>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
