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

export default function Input({
  width = "100%",
  icon,
  iconClick,
  label,
  margin,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}: inputPropsType) {
  return (
    <InputWrapper width={width} $margin={margin}>
      <Label>{label}</Label>
      <InputStyle
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        width={width}
        placeholder={placeholder}
      />
      {icon && <Image src={icon} alt="" onClick={iconClick} />}
    </InputWrapper>
  );
}

const InputWrapper = styled.div<{
  width: string;
  $margin: CSSProperties["margin"];
}>`
  margin-top: 20px;
  margin-bottom: 20px;
  width: ${({ width }) => width};
  margin: ${({ $margin }) => $margin};
`;

const Label = styled.label`
  /* display: block;
  margin-bottom: 5px;
  color: #666;
  font-size: 14px; */
  color: var(--Gray-800, #222);

  /* Label Medium */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

const InputStyle = styled.input`
  /* width: 100%;
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
  } */

  display: flex;
  width: 100%;
  padding: 16px 0;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid var(--Gray-100, #eee);
  background: var(--Gray-50, #f6f6f6);
`;

const Image = styled.img``;
