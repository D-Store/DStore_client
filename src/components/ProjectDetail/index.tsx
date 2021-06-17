import Comment from "components/Comment";
import { memo, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { ProjectDetailContainer, Success, Text } from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { customAxios } from "utils/customAxios";

interface Param {
  id: string;
}

const ProjectDetail = () => {
  const [mainImageUrl, setMainImageUrl] = useState<string>();
  const handleClickImage = useCallback((url: string) => {
    setMainImageUrl(url);
  }, []);

  const { data: userData, error } = useSWR("/user/me", fetcher);
  const { id: projectId } = useParams<Param>();
  const { data: detailProject } = useSWR(
    `/project/detail/${projectId}`,
    fetcher
  );

  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    setMainImageUrl(detailProject?.project.files[0].fileLocation);
    setIsLiked(detailProject?.project.likeState);
  }, [detailProject?.project.files, detailProject?.project.likeState]);

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

  const handleClickLike = useCallback(async () => {
    setIsLiked((prev) => !prev);

    await customAxios.put(`like/${projectId}`);
  }, [projectId]);

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
      <div className="like" onClick={handleClickLike}>
        {isLiked ? (
          <Success>
            좋아요 누름
            <AiFillHeart />
          </Success>
        ) : (
          <Text>
            좋아요
            <AiOutlineHeart />
          </Text>
        )}
      </div>
      <div className="meta-container">
        <h1>{detailProject.project.title}</h1>
        {mapTags}
      </div>
      <div className="img-container">
        <img src={mainImageUrl} alt="" className="main-img" />
        <ul className="imgs">{mapImages}</ul>
      </div>
      <span className="content">{detailProject.project.content}</span>

      <Comment />
    </ProjectDetailContainer>
  );
};

export default memo(ProjectDetail);
