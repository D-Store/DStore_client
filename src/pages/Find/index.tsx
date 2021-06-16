import ContentLoaderComponent from "components/ContentLoader";
import ProjectList from "components/ProjectList";
import useInput from "hooks/useInput";
import React from "react";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { InputContainer } from "./styles";

const Find = () => {
  const [search, onChangeSearch] = useInput("");
  const { data: projectData } = useSWR(`/project/${search}`, fetcher, {
    dedupingInterval: 1000,
  });

  if (!projectData) {
    return <ContentLoaderComponent />;
  }
  return (
    <>
      <InputContainer
        value={search}
        onChange={onChangeSearch}
        placeholder="찾으시는 프로젝트를 검색해보세요"
      />

      <ProjectList
        title="탐색된 프로젝트"
        subTitle="검색 결과가 마음에 들었으면 좋겠어요!"
        projects={projectData?.projectList}
      />
    </>
  );
};

export default Find;
