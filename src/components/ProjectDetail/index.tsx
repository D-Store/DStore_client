import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { ProjectDetailContainer } from "./styles";

interface Param {
  id: string;
}

const ProjectDetail = () => {
  const [mainImageUrl, setMainImageUrl] = useState<string>();
  const handleClickImage = useCallback((url: string) => {
    setMainImageUrl(url);
  }, []);

  const { id: projectId } = useParams<Param>();

  const { data: detailProject } = useSWR(
    `/project/detail/${projectId}`,
    fetcher
  );

  useEffect(() => {
    setMainImageUrl(detailProject?.project.files[0].fileLocation);
  }, [detailProject?.project.files]);

  const mapTags = detailProject?.project.tags.map(
    (tag: string, index: number) => (
      <Link to="/" className="tag" key={index}>
        #{tag}
      </Link>
    )
  );
  const mapImages = detailProject?.project.files.map((file: any) => {
    return (
      <li key={file.id}>
        <img
          src={file.fileLocation}
          alt={file.id}
          onClick={() => handleClickImage(file.fileLocation)}
          className={mainImageUrl === file.fileLocation ? "active" : ""}
        />
      </li>
    );
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  if (!detailProject) {
    return null;
  }

  return (
    <ProjectDetailContainer>
      <div className="meta-container">
        <h1>{detailProject.project.title}</h1>
        {mapTags}
      </div>
      <div className="img-container">
        <img src={mainImageUrl} alt="" className="main-img" />
        <ul className="imgs">{mapImages}</ul>
      </div>
      <span className="content">{detailProject.project.content}</span>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
