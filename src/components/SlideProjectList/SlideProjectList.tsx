import React from "react";
import ProjectCard from "../ProjectCard";
import  { SlideProjectContainer , SlideProjectColumn , SlideProjectRow , SlideProjectButton }  from "./SlideProjectList.style";

const HotProjectList = () => {
  return (
    <SlideProjectContainer>
        <SlideProjectButton>
        왼쪽
        </SlideProjectButton>
        <SlideProjectRow>
        <SlideProjectColumn>
        <ProjectCard title="레드벨벳" content="a" thumnail="https://static.news.zumst.com/images/51/2017/09/30/14173c29f7eb4509a9face733a4da097.jpg" isSlide={true} />
        <ProjectCard title="세은" content="a" thumnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAcvj31rcnWpmW2lT5eBOs1GAjLA28mp70g&usqp=CAU" isSlide={true} />
        </SlideProjectColumn>
        <SlideProjectColumn>
        <ProjectCard title="아이사" content="a" thumnail="https://i.pinimg.com/originals/52/9b/b0/529bb09ca4fc744e9cae300f6ac45367.jpg" isSlide={true} />
        <ProjectCard title="스테이시" content="a" thumnail="https://v-phinf.pstatic.net//20210425_247/1619345773086Vw3qx_JPEG/image.jpg?type=w1000" isSlide={true} />
        </SlideProjectColumn>
        </SlideProjectRow>
        <SlideProjectButton>
        오른쪽
        </SlideProjectButton>
    </SlideProjectContainer>
  );
};

export default HotProjectList;
