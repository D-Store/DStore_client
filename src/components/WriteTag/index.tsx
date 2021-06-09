import React from "react";
import { WriteTagContainer, WriteTagContent } from "./styles";

const WriteTag = () => {
  //프로젝트 생성 시 필요한 것들
  //   {
  //     title:String,
  //     content:String,
  //     users:[Long],
  //     file:[file],
  //     tags:[string]
  // }
  return (
    <WriteTagContainer>
      <WriteTagContent>
        <h1>태그</h1>
        <span className="hash">
          <span className="tag">#</span>
          <input type="text" placeholder="태그를 설정해 주세요" />
        </span>
        <button>추가</button>
      </WriteTagContent>
    </WriteTagContainer>
  );
};

export default WriteTag;
