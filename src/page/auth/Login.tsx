import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets";

const Login: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 로그인 로직 처리
  };

  return (
    <>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <LogoContainer>
            <Logo src={Images.logo} alt="Logo" />
          </LogoContainer>
          <InputGroup>
            <Label htmlFor="text">아이디</Label>
            <Input
              type="text"
              id="text"
              value={id}
              onChange={handleIdChange}
              required
              placeholder="아이디를 입력해 주세요"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              placeholder="비밀번호를 입력해 주세요"
            />
          </InputGroup>
          <LoginButton type="submit">로그인</LoginButton>
          <LoginPromptContainer>
            <SignupPromptText>
              계정이 없으신가요?
              <SignupText onClick={handleSignupClick}>가입하기</SignupText>
            </SignupPromptText>
          </LoginPromptContainer>
        </LoginForm>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const LoginForm = styled.form`
  width: 400px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 3px solid #052970;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const InputGroup = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #666;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;

  ::placeholder {
    color: #c0c0c0;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 60px;
  padding: 12px;
  background-color: #052970;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  margin-top: 10px;
`;

const LoginPromptContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
const SignupPromptText = styled.span`
  font-size: 14px;
  color: #666;
`;

const SignupText = styled.span`
  color: #1860f0;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;