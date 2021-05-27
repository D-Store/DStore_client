import React, { useEffect } from "react";
import { setUrl } from "../../lib/setUrl";
import { ProjectType } from "../../types/project";
import ProjectCard from "../ProjectCard";
import { HotProjectListContainer } from "./HotProjectList.style";

const HotProjectList = ({ projects }: any) => {
  const mapProjects =
    projects &&
    projects.map((project: ProjectType) => {
      console.log(project.mainPhoto.fileLocation);
      return (
        <ProjectCard
          key={project.id}
          title={project.title}
          content={project.content}
          thumnail={
            project.mainPhoto.thumnail
              ? `http://` + setUrl(project.mainPhoto.fileLocation)
              : "https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1"
          }
          isSlide={false}
        />
      );
    });

  return (
    <HotProjectListContainer>
      <h1 className="hot-title">따끈따끈한 프로젝트</h1>
      <p className="hot-desc">갓 올라온 프로젝트들을 확인해보세요!</p>
      <div className="project-list">
        {mapProjects}
        {/* <ProjectCard
          title={"배달의 민족"}
          content="'좋은 음식을 먹고싶은 곳에서'  배달의민족은 우아한형제들에서 운영하는 대한민국 배달 주문 서비스 브랜드명이다. 2016년 배달의 민족 브랜딩 과정을 담은 '배민다움'이라는 책을 출판했다. 2019년 12월 딜리버리히어로가 배달의민족 운영사 우아한형제들의 국내외 투자자 지분 87%를 인수합병할 것이라고 발표하였다.현재는 국내 배달앱 1위로 압도적인 시장 우위를 유지하고 있으며 지속적으로 높은 매출 성장율을 기록 중이다. 시장 형성 초기 시장 우위를 점하기 위한 공격적인 마케팅으로 오래도록 적자를 봐 왔으나 2016년 연간 흑자를 달성한 후 흑자 기조를 이어가고 있다. 2017년에는 전체 주문수 1500만건을 넘겼으며#, 2018년 1월 기준 점유율은 다른 두 앱을 제치고 51%라는 우위를 점하고 있다"
          thumnail="http://img.woowahan.com/www/common/baemin.jpg"
        />
        <ProjectCard
          title={"도담도담"}
          content="도담도담은 현재 대구소프트웨어고등학교에서 사용 중인 스마트 학생 생활 관리 시스템입니다."
          thumnail="https://images.velog.io/images/hjh040302/post/3afab22f-65c3-4a2e-b6f6-1e0b3fa369cb/image.png"
        />
        <ProjectCard
          title={"에어비엔비"}
          content="에어비앤비는 2008년 8월 시작된 세계 최대의 숙박 공유 서비스이다. 자신의 방이나 집, 별장 등 사람이 지낼 수 있는 모든 공간을 임대할 수 있다. 2013년 기준, 192개국 3만 4800여 개 장소에 대한 숙박을 중개하고 있으며, 2초당 한 건 씩 예약이 이뤄지고 있다"
          thumnail="https://images.velog.io/images/hjh040302/post/0be67d7c-929a-4420-9064-b11ac62628fb/image.png"
        /> */}
      </div>
    </HotProjectListContainer>
  );
};

export default HotProjectList;
