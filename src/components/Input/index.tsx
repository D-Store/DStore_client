import React, { VFC } from "react";
import { InputContainer } from "./styles";

interface IProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: VFC<IProps> = (props) => {
  return <InputContainer {...props}></InputContainer>;
};

export default Input;
