import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "../register/Register.style";
const Register = ({ setCurrentUser }) => {
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
        <Header>Register Here</Header>
        <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="text" placeholder="Name" required />
          <StyledInput type="text" placeholder="Last name" required />
          <StyledInput type="email" placeholder="email" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledInput type="password" placeholder="Password2" required />
          <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
}

export default Register