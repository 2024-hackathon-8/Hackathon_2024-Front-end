import styled from 'styled-components';
import LogInCompo from '../../components/organism/logIn';
import { BackButton } from '../../components/BackButton';
import { Text } from '../../components/designSystem/Text';
import { Input } from '../../components/designSystem/Input';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { Button } from '../../components/designSystem/Button';

export default function LogInPage() {
  const { form, handleChange } = useForm<{
    id: string;
    password: string;
  }>({ id: '', password: '' });

  useEffect(() => console.log(form), [form]);

  return (
    <>
      <Main>
        <LoginSection>
          <TitleBox>
            <BackButton />
            <div style={{ marginTop: '16px' }}>
              <Text font="TitleLarge">로그인</Text>
            </div>
            <Text font="BodyMedium" color="Gray500">
              로그인 하여 서비스를 이용해 보세요.
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
            <Input
              placeholder="비밀번호를 입력해 주세요.."
              label="비밀번호"
              name="password"
              required
              type="password"
              value={form.password}
              onChange={handleChange}
            />
          </InputBox>
          <ButtonBox>
            <Button size="large" full onSubmit={() => {}}>
              로그인
            </Button>
            <QuestionBox>
              <Text font="BodySmall" color="Gray500">
                아직 회원이 아니신가요?
              </Text>
              <a href="/signup">
                <Text font="LabelMedium" color="Blue500">
                  회원가입
                </Text>
              </a>
            </QuestionBox>
          </ButtonBox>
        </LoginSection>
      </Main>
      <LogInCompo />
    </>
  );
}

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
  gap: 32px;
  flex-direction: column;
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
`;
