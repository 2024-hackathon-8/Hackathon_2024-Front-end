import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderNotLogin from "../../designSystem/common/headerNotLogin";

export default function LogInCompo() {
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
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Container>
        <LoginContainer>
          {/* <GoBackButton onClick={handleGoBack}>{"<"}</GoBackButton> */}
          <BackButton onClick={handleGoBack}>
            <BackIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L11.4142 12L14.7071 15.2929C15.0976 15.6834 15.0976 16.3166 14.7071 16.7071C14.3166 17.0976 13.6834 17.0976 13.2929 16.7071L9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289Z"
                  fill="black"
                />
              </svg>
            </BackIcon>
          </BackButton>
          <LoginForm onSubmit={handleSubmit}>
            <Title>로그인</Title>
            <Subtitle>로그인하여 서비스를 이용해 보세요</Subtitle>
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
                아직 회원이 아니신가요?
                <SignupText onClick={handleSignupClick}>회원가입</SignupText>
              </SignupPromptText>
            </LoginPromptContainer>
          </LoginForm>
        </LoginContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-shrink: 0;
  margin: 20px 0;
`;

const BackButton = styled.button`
  width: 42px;
  height: 42px;
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid #eee;
  cursor: pointer;
`;

const BackIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
`;

const LoginForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const GoBackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #ccc;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 40px 0 20px 0;
  color: #333;
  align-self: flex-start;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #888888;
  margin-bottom: 20px;
  align-self: flex-start;
`;

const InputGroup = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #666;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  background: #f6f6f6;
  border: 1px solid #eee;
  border-radius: 7px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;

  &:hover {
    background: #ececec;
    transition: 200ms;
  }

  &:focus {
    background: white;
  }

  ::placeholder {
    color: #c0c0c0;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 60px;
  padding: 12px;
  background-color: #1860f0;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;

const LoginPromptContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupPromptText = styled.span`
  margin-top: 30px;
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
