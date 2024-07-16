import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets";
import HeaderNotLogin from "../../components/common/headerNotLogin";

const Signup: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
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
      <header>
        <HeaderNotLogin />
      </header>
      <Container>
        <SignupContainer>
          <BackButton onClick={handleLoginClick}>
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
          <SignupForm onSubmit={handleSubmit}>
            <Title>회원가입</Title>
            <Subtitle>회원가입 하여 서비스를 이용해보세요.</Subtitle>
            <InputGroup>
              <Label htmlFor="id">아이디</Label>
              <IdInput
                type="text"
                id="id"
                value={id}
                onChange={handleIdChange}
                required
                placeholder="아이디를 입력해 주세요"
              />
              <IdCheckButton>중복 체크</IdCheckButton>
              <IdSuccess>사용 가능한 아이디입니다.</IdSuccess>
              <IdFailed>이미 사용 중인 아이디입니다.</IdFailed>
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
            <SignupButton type="submit">다음</SignupButton>
            <SignupPromptContainer>
              <LoginPromptText>
                이미 가입하셨나요?
                <LoginText onClick={handleLoginClick}>로그인</LoginText>
              </LoginPromptText>
            </SignupPromptContainer>
          </SignupForm>
        </SignupContainer>
      </Container>
    </>
  );
};

export default Signup;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
`;

const SignupContainer = styled.div`
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

const SignupForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
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

const IdInput = styled.input`
  width: 78%;
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

const IdCheckButton = styled.button`
  color: white;
  width: 20%;
  height: 40px;
  padding: 10px;
  background-color: #1860f0;
  border-radius: 7px;
  border: none;
  float: right;
  cursor: pointer;
`;

const IdSuccess = styled.p`
  font-size: 14px;
  color: #1860f0;
  margin-top: 5px;
  padding: 0;
`;

const IdFailed = styled.p`
  font-size: 14px;
  color: #ff0000;
  margin-top: 5px;
  padding: 0;
`;

const SignupButton = styled.button`
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
