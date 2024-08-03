import React, { useState } from "react";
import styled from "styled-components";

const Writepost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <WritepostContainer>
      <Form onSubmit={handleSubmit}>
        <Label>사업 아이템</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="사업아이템를 입력해주세요"
        />
        <Label>비전</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="회사의 비전을 입력해주세요"
        />
        <Label>소개</Label>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="본인의 사업에 대해 소개해주세요"
        />
        <Button type="submit">작성완료</Button>
      </Form>
    </WritepostContainer>
  );
};

export default Writepost;

const WritepostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Form = styled.form`
  width: 400px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Label = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: #052970;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export {};
