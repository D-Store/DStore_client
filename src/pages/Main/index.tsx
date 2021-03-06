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
            title="π₯μμ¦ ν«ν νλ‘μ νΈ"
            subTitle="μμ¦ κ°μ₯ μΈκΈ°μλ νλ‘μ­νΈλ λ­κΉμ?"
            projects={newProjectData?.projectList}
          /> */}
          <ProjectList
            title="πββοΈκ° λμ¨ νλ‘μ νΈ"
            subTitle="μ΅μ  νλ‘μ νΈλ₯Ό μ§κΈλ°λ‘ λ§λλ³΄μΈμ!"
            projects={newProjectData?.projectList}
          />
        </>
      ) : (
        <NoProject>
          <h1>νλ‘μ νΈκ° μμ΅λλ€.</h1>
          {error && <small>μΈν°λ· μ°κ²°μ νμΈν΄λ³΄μΈμ</small>}
        </NoProject>
      )}
    </>
  );
};

export default Main;
