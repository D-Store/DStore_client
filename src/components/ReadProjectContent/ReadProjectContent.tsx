import React from "react";
import { ReadProjectContentContainer } from "./ReadProjectContent.style";

interface IProps {
  content: string;
}

const ReadProjectContent: React.FC<IProps> = ({ content }) => {
  const hashTag = [
    "웹",
    "hashTag",
    "조민수",
    "잘생김",
    "홍준혁",
    "못생김",
    "바보",
    "조민수",
    "헤시테그",
    "쿠키절",
    "슬기야",
    "사랑해",
    "드럼",
    "스틱",
  ];
  return (
    <ReadProjectContentContainer>
      <div className="content">{content}</div>
      <div className="hashtag">
        {hashTag.map((current, key) => (
          <a href={`/${current}`} key={key}>
            {current}
          </a>
        ))}
      </div>
    </ReadProjectContentContainer>
  );
};

export default ReadProjectContent;
