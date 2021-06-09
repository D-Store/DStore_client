import React from "react";

import { WriteFormContainer, WriteFormContext } from "./styles";

const WriteForm = () => {
  //프로젝트 생성 시 필요한 것들
  //   {
  //     title:String,
  //     content:String,
  //     users:[Long],
  //     file:[file],
  //     tags:[string]
  // }
  return (
    <WriteFormContainer>
      <WriteFormContext>
        <input type="text" placeholder="제목" />
        <textarea placeholder="프로젝트 내용"></textarea>
      </WriteFormContext>
    </WriteFormContainer>
  );
};

export default WriteForm;
