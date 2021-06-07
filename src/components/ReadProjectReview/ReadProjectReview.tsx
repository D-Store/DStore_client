import React from "react";
import Like from "../../public/static/svg/Like.svg";
import { CommentType } from "../../types/comment";
import timeCounting from "time-counting";
import {
  ReadProjectReviewContainer,
  ReadProjectReviewForm,
  ReadProjectReviewList,
  ReadProjectReviewItem,
} from "./ReadProjectReview.style";

interface IProps {
  comments: CommentType[];
}

const ProjectReview: React.FC = () => {
  return (
    <ReadProjectReviewItem>
      <div className="profile" />
      <div className="content">
        리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용
        리뷰 내용
      </div>
      <div className="isLike">
        <Like />
        <div>
          <div>좋아요</div>
          {/* {isLike ? <div>누름</div> : <div>누르지 않음</div>} */}
        </div>
      </div>
    </ReadProjectReviewItem>
  );
};

const ReadProjectReview: React.FC<IProps> = ({ comments }) => {
  const mapComments =
    comments &&
    comments.map(comment => {
      return (
        <ReadProjectReviewItem>
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
      <ReadProjectReviewForm>
        <textarea></textarea>
        <button>작성</button>
      </ReadProjectReviewForm>
      <ReadProjectReviewList>{mapComments}</ReadProjectReviewList>
    </ReadProjectReviewContainer>
  );
};

export default ReadProjectReview;
