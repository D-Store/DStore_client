import React from "react";
import Like from "../../public/static/svg/Like.svg";
import {
  ReadProjectReviewContainer,
  ReadProjectReviewForm,
  ReadProjectReviewList,
  ReadProjectReviewItem,
} from "./ReadProjectReview.style";
import { setUrl } from "../../lib/setUrl";
import { ProjectType } from "../../types/project";

interface IProps {
  isLike: boolean;
}

const ProjectReview: React.FC<IProps> = ({ isLike }) => {
  return (
    <ReadProjectReviewItem isLike={isLike}>
      <div className="profile" />
      <div className="content">
        리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용 리뷰 내용
        리뷰 내용
      </div>
      <div className="isLike">
        <Like />
        <div>
          <div>좋아요</div>
          {isLike ? <div>누름</div> : <div>누르지 않음</div>}
        </div>
      </div>
    </ReadProjectReviewItem>
  );
};

const ReadProjectReview: React.FC = () => {
  return (
    <ReadProjectReviewContainer>
      <ReadProjectReviewForm>
        <textarea></textarea>
        <button>작성</button>
      </ReadProjectReviewForm>
      <ReadProjectReviewList>
        <ProjectReview isLike={false} />
        <ProjectReview isLike={true} />
      </ReadProjectReviewList>
    </ReadProjectReviewContainer>
  );
};

export default ReadProjectReview;
