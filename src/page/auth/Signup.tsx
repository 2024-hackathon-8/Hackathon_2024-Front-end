import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets";

const Signup: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <SignupContainer>
        <SignupForm onSubmit={handleSubmit}>
          <LogoContainer>
            <Logo src={Images.logo} alt="Logo" />
          </LogoContainer>
          <InputGroup>
            <Label htmlFor="id">아이디</Label>
            <Input
              type="text"
              id="id"
              value={id}
              onChange={handleIdChange}
              required
              placeholder="아이디를 입력해 주세요"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="name">이름</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              placeholder="이름을 입력해 주세요"
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
          <InputGroup>
            <Label htmlFor="confirmPassword">비밀번호 확인</Label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              placeholder="비밀번호를 다시 입력해 주세요"
            />
          </InputGroup>
          <SignupButton type="submit">가입하기</SignupButton>
          <SignupPromptContainer>
            <LoginPromptText>
              계정이 있으신가요?
              <LoginText onClick={handleLoginClick}>로그인</LoginText>
            </LoginPromptText>
          </SignupPromptContainer>
        </SignupForm>
      </SignupContainer>
    </>
  );
};

export default Signup;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const SignupForm = styled.form`
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

const SignupButton = styled.button`
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

const SignupPromptContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const LoginPromptText = styled.span`
  font-size: 14px;
  color: #666;
`;

const LoginText = styled.span`
  color: #1860f0;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
