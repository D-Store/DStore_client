import Banner from "components/Banner";
import ProjectList from "components/ProjectList";
import ContentLoaderComponent from "components/ContentLoader";
import useSWR from "swr";
import fetcher, { paramFetcher } from "utils/fetcher";
import { NoProject } from "./styles";

const Main = () => {
  const { data: newProjectData, error } = useSWR("/project", (url) =>
    paramFetcher(url, {
      page: 0,
      size: 5,
      sort: "createAt,desc",
    })
  );

  if (!newProjectData && !error) {
    return <ContentLoaderComponent />;
  }

  return (
    <>
      <Banner />
      {newProjectData?.projectList.length > 0 ? (
        <>
          {/* <ProjectList
            title="🔥요즘 핫한 프로젝트"
            subTitle="요즘 가장 인기있는 프로잭트는 뭘까요?"
            projects={newProjectData?.projectList}
          /> */}
          <ProjectList
            title="🙋‍♂️갓 나온 프로젝트"
            subTitle="최신 프로젝트를 지금바로 만나보세요!"
            projects={newProjectData?.projectList}
          />
        </>
      ) : (
        <NoProject>
          <h1>프로젝트가 없습니다.</h1>
          {error && <small>인터넷 연결을 확인해보세요</small>}
        </NoProject>
      )}
    </>
  );
};

export default Main;
