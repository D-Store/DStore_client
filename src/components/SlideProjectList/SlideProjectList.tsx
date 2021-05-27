import React from "react";
import ProjectCard from "../ProjectCard";
import  { SlideProjectContainer , SlideProjectColumn , SlideProjectRow , SlideProjectButton }  from "./SlideProjectList.Style";

const HotProjectList = () => {
  return (
    <SlideProjectContainer>
        <SlideProjectButton>
        왼쪽
        </SlideProjectButton>
        <SlideProjectRow>
        <SlideProjectColumn>
        <ProjectCard thumnail="https://static.news.zumst.com/images/51/2017/09/30/14173c29f7eb4509a9face733a4da097.jpg" isSlide={true} />
        <ProjectCard thumnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAcvj31rcnWpmW2lT5eBOs1GAjLA28mp70g&usqp=CAU" isSlide={true} />
        </SlideProjectColumn>
        <SlideProjectColumn>
        <ProjectCard thumnail="https://i.pinimg.com/originals/52/9b/b0/529bb09ca4fc744e9cae300f6ac45367.jpg" isSlide={true} />
        <ProjectCard thumnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3BNQNEaZ2L_uy8tYbhbLR9zcStATX6GvmA&usqp=CAU" isSlide={true} />
        </SlideProjectColumn>
        </SlideProjectRow>
        <SlideProjectButton>
        오른쪽
        </SlideProjectButton>
    </SlideProjectContainer>
  );
};

export default HotProjectList;
