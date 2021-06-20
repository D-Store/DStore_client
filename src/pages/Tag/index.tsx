import ProjectList from "components/ProjectList";
import { NoProject } from "pages/Main/styles";
import { useState } from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import { paramFetcher } from "utils/fetcher";
import { Container } from "./styles";

const Tag = () => {
  const { tag } = useParams<{ tag: string }>();
  const [page, setPage] = useState(0);

  const { data: projectData, error } = useSWR(`/tag/projects`, (url) =>
    paramFetcher(url, {
      page,
      size: 5,
      sort: "id,desc",
      tags: tag,
    })
  );

  return (
    <Container>
      {projectData?.projectList.length > 0 ? (
        <>
          <ProjectList
            title={`🔎 검색 결과 (#${tag})`}
            subTitle="최신 프로젝트를 지금바로 만나보세요!"
            projects={projectData?.projectList}
          />
        </>
      ) : (
        <NoProject>
          <h1>프로젝트가 없습니다.</h1>
          {error && <small>인터넷 연결을 확인해보세요</small>}
        </NoProject>
      )}
    </Container>
  );
};

export default Tag;
