import { useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../BackButton';
import { Text } from '../../designSystem/Text';
import { Input } from '../../designSystem/Input';
import { Button } from '../../designSystem/Button';
import { useForm } from '../../../hooks/useForm';

export default function Information() {
  const navigate = useNavigate();

  const [idChecked, setIdChecked] = useState(false);

  const { form, handleChange } = useForm<{
    id: string;
    password: string;
    checkPassword: string;
  }>({ id: '', password: '', checkPassword: '' });

  useEffect(() => console.log(form), [form]);

  const handleIdCheck = () => {
    // Simulate ID check
    setIdChecked(true);
  };

  return (
    <Main>
      <SignupSection>
        <TitleBox>
          <BackButton />
          <div style={{ marginTop: '16px' }}>
            <Text font="TitleLarge">기본 정보</Text>
          </div>
          <Text font="BodyMedium" color="Gray500">
            기본 정보를 입력해 주세요.
          </Text>
        </TitleBox>
        <InputBox>
          <Input
            placeholder="아이디를 입력해 주세요.."
            label="아이디"
            name="id"
            required
            value={form.id}
            onChange={handleChange}
          />
          <Button size="large" style={{width:'25%'}} onClick={handleIdCheck}>중복 체크</Button>
          {idChecked && (
            <Text font="LabelSmall" color="Blue500">
              사용 가능한 아이디 입니다.
            </Text>
          )}
          <Input
            placeholder="비밀번호를 입력해 주세요.."
            label="비밀번호"
            name="password"
            required
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          <Input
            placeholder="비밀번호를 입력해 주세요.."
            label="비밀번호 확인"
            name="checkPassword"
            required
            type="password"
            value={form.checkPassword}
            onChange={handleChange}
          />
        </InputBox>
        <ButtonBox>
          <Button size="large" full onClick={() => navigate('/signupType')}>
            다음
          </Button>
        </ButtonBox>
      </SignupSection>
    </Main>
  );
}



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

const SignupSection = styled.form`
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
`;
