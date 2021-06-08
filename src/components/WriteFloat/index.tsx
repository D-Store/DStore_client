import Link from "next/link";
import React from "react";
import { FloatMenu } from "./styles";

const WriteFloat: React.FC = () => {
  return (
    <FloatMenu>
      <Link href="/write">
        <a>🖋프로젝트 작성</a>
      </Link>
    </FloatMenu>
  );
};

export default WriteFloat;
