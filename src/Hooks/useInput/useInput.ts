import { useState } from "react";

const useInput = () => {
  const [value, setvalue] = useState<string>("");

  const onChange = (event: any) => {
    setvalue(event.target.value);
  };
  return { value, onChange };
};

export default useInput;
