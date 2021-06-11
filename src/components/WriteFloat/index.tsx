import Link from "next/link";
import React from "react";
import { FloatMenu } from "./styles";

const WriteFloat: React.FC = () => {
  return (
    <Link href="/write">
      <FloatMenu>
        <a>🖋프로젝트 작성</a>
      </FloatMenu>
    </Link>
  );
};

export default WriteFloat;
