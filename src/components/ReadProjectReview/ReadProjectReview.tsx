import React, { useCallback, useState } from "react";
import Like from "../../public/static/svg/Like.svg";
import { CommentType } from "../../types/comment";
import timeCounting from "time-counting";
import {
  ReadProjectReviewContainer,
  ReadProjectReviewForm,
  ReadProjectReviewList,
  ReadProjectReviewItem,
} from "./ReadProjectReview.style";
import { createComment } from "../../lib/api/project";
import { toastr } from "react-redux-toastr";

interface IProps {
  comments: CommentType[];
  projectId: number;
}
const ReadProjectReview: React.FC<IProps> = ({ comments, projectId }) => {
  const [comment, setComment] = useState("");
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await createComment({
        projectId,
        comment,
      })
        .then((response) => {
          toastr.success("댓글 작성 성공!", response.data.message);
        })
        .catch((error) => {
          toastr.error("에러", error.response.data.message);
        });
    },
    [comment]
  );

  const mapComments =
    comments &&
    comments.map((comment) => {
      return (
        <ReadProjectReviewItem key={comment.id}>
          <div className="info">
            <img
              src={comment.user.profileImage}
              alt="profile"
              className="profile"
            />
            <div className="name">{comment.user.name}</div>
            <div className="timeLine">
              {timeCounting(comment.createAt, {
                lang: "ko",
              })}
            </div>
          </div>
          <div className="content">{comment.comment}</div>
        </ReadProjectReviewItem>
      );
    });

  return (
    <ReadProjectReviewContainer>
      <ReadProjectReviewForm onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">작성</button>
      </ReadProjectReviewForm>
      <ReadProjectReviewList>{mapComments}</ReadProjectReviewList>
    </ReadProjectReviewContainer>
  );
};

export default ReadProjectReview;
