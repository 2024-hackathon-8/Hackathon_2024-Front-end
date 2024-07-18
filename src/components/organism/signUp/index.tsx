import { useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../BackButton';
import { Text } from '../../designSystem/Text';
import { Input } from '../../designSystem/Input';
import { Button } from '../../designSystem/Button';
import { useForm } from '../../../hooks/useForm';

export default function Signup() {
  const navigate = useNavigate();

  const { form, handleChange } = useForm<{
    phone: string;
    certification: string;
  }>({ phone: '', certification: '' });

  return (
    <Main>
      <LoginSection>
        <TitleBox>
          <BackButton />
          <div style={{ marginTop: '16px' }}>
            <Text font="TitleLarge">회원가입</Text>
          </div>
          <Text font="BodyMedium" color="Gray500">
            회원가입 하여 서비스를 이용해 보세요.
          </Text>
        </TitleBox>
        <InputBox>
          <IdCheckWrapper>
            <Input
              placeholder="아이디를 입력해 주세요.."
              label="아이디"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
            />
            <Button size="large">중복 체크</Button>
          </IdCheckWrapper>
          <Input
            placeholder="비밀번호를 입력해 주세요.."
            label="비밀번호"
            name="certification"
            required
            value={form.certification}
            onChange={handleChange}
          />
        </InputBox>
        <ButtonBox>
          <Button size="large" full onClick={() => navigate('/infomation')}>
            다음
          </Button>
          <QuestionBox>
            <Text font="BodySmall" color="Gray500">
              이미 가입하셨나요?
            </Text>
            <a href="/login">
              <Text font="LabelMedium" color="Blue500">
                로그인
              </Text>
            </a>
          </QuestionBox>
        </ButtonBox>
      </LoginSection>
    </Main>
  );
}

const IdCheckWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const QuestionBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LoginSection = styled.form`
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  gap: 64px;
  padding: 80px 40px;
  animation: up 0.3s forwards;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 72px;
  min-height: calc(100dvh - 72px);
`;
