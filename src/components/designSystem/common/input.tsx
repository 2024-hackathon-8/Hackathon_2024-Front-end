import React, { InputHTMLAttributes } from "react";
import styled, { CSSProperties } from "styled-components";

interface inputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  icon?: string;
  iconClick?: () => void;
  label?: string;
  margin?: CSSProperties["margin"];
  //isError?: boolean;
  //onForm?: () => void
}

export default function input({ label }: inputPropsType) {
  // export default function input({ label, input, button }: inputPropsType) {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
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
  height: 60px;
  padding: 10px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 10px;
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
