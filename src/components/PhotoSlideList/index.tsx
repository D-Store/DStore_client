import React from "react";
import { PhotoSlideContainer, PhotoSlideContent, PhotoSlider } from "./styled";

const PhotoSlideList = () => {
  //프로젝트 생성 시 필요한 것들
  //   {
  //     title:String,
  //     content:String,
  //     users:[Long],
  //     file:[file],
  //     tags:[string]
  // }
  const files = [
    { fileLocation: "https://newsimg.sedaily.com/2020/10/23/1Z98SRHJB1_1.jpg" },
    { fileLocation: "https://pbs.twimg.com/media/Eyc0OxkVoAQpagt.jpg" },
    { fileLocation: "https://i.ytimg.com/vi/c2cz_uF3NII/maxresdefault.jpg" },
    { fileLocation: "https://i.ytimg.com/vi/v8PCQytM7Ls/maxresdefault.jpg" },
    { fileLocation: "https://i.ytimg.com/vi/AwthUVE5xZg/maxresdefault.jpg" },
    { fileLocation: "https://i.ytimg.com/vi/ueDkebWgo70/maxresdefault.jpg" },
    { fileLocation: "https://i.ytimg.com/vi/LAwNGB_PAxU/maxresdefault.jpg" },
    { fileLocation: "https://i.ytimg.com/vi/T0XfI1OcjbA/maxresdefault.jpg" },
    { fileLocation: "https://i.ytimg.com/vi/QtEulq4y_ZU/maxresdefault.jpg" },
    { fileLocation: "https://pbs.twimg.com/media/EnpKDVGVoAISkfZ.jpg" },
    {
      fileLocation: "https://i.ytimg.com/vi/RKJ58SNsrT4/hqdefault.jpg",
    },
  ];
  const mapFiles =
    files &&
    files.map((file, key) => {
      return <img src={file.fileLocation} alt="이미지" key={key} />;
    });

  return (
    <PhotoSlideContainer>
      <PhotoSlideContent>
        <h1>사진</h1>
        <PhotoSlider>{mapFiles}</PhotoSlider>
      </PhotoSlideContent>
    </PhotoSlideContainer>
  );
};

export default PhotoSlideList;
