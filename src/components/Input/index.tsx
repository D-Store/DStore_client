import React, { VFC } from "react";
import { CSSProperties } from "styled-components";
import { InputContainer } from "./styles";

interface IProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  style: CSSProperties;
}

const Input: VFC<IProps> = (props) => {
  return <InputContainer {...props}></InputContainer>;
};

export default Input;
