import { useCallback, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import fetcher, { paramFetcher } from "utils/fetcher";
import autosize from "autosize";
import { CommentInput, CommentItem, CommentList } from "./styles";
import { useParams } from "react-router";
import { CommentType } from "typings/db";
import ContentLoaderComponent from "components/ContentLoader";
import { customAxios } from "utils/customAxios";
import useInput from "hooks/useInput";
import { toast } from "react-toastify";
import timeCounting from "time-counting";

const Comment = () => {
  const { id } = useParams<{ id: string }>();
  const { data: userData } = useSWR("/user/me", fetcher);
  const { data: commentData, revalidate } = useSWR(`/comment/${id}`, (url) =>
    paramFetcher(url, {
      page: 0,
      size: 5,
      sort: "createAt,desc",
    })
  );

  const commentRef = useRef<HTMLTextAreaElement>(null);

  const [commentLoading, setCommentLoading] = useState(false);
  const [comment, onChangeComment] = useInput("");

  const handleCreateComment = useCallback(() => {
    if (comment && !commentLoading) {
      setCommentLoading(true);
      customAxios
        .post(`/comment`, {
          projectId: id,
          comment,
        })
        .then((response) => {
          setCommentLoading(false);
          toast.success(response.data.message);
          revalidate();
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
  }, [comment, id, revalidate, commentLoading]);

  useEffect(() => {
    if (commentRef.current) {
      autosize(commentRef.current);
    }
  }, []);

  if (!userData && !commentData) {
    return <ContentLoaderComponent />;
  }

  return (
    <>
      <CommentInput>
        <img
          src={
            userData?.user.profileImage ||
            "https://mblogthumb-phinf.pstatic.net/20150417_264/ninevincent_14291992723052lDb3_JPEG/kakao_11.jpg?type=w2"
          }
          alt=""
        />
        <textarea
          ref={commentRef}
          placeholder="이 프로젝트에 대한 리뷰를 작성해주세요."
          value={comment}
          onChange={onChangeComment}
        />
        <button onClick={handleCreateComment}>
          {commentLoading ? <>로딩중...</> : <>리뷰 작성</>}
        </button>
      </CommentInput>
      <CommentList>
        {commentData?.comments.map((comment: CommentType) => {
          return (
            <CommentItem key={comment.id}>
              <div className="header">
                <img
                  src={
                    comment.user.profileImage ||
                    "https://mblogthumb-phinf.pstatic.net/20150417_264/ninevincent_14291992723052lDb3_JPEG/kakao_11.jpg?type=w2"
                  }
                  alt={`${comment.user.name}의 프로필`}
                />
                <h1>{comment.user.name}</h1>
                <div className="createdAt">
                  -
                  {timeCounting(comment.createAt, {
                    lang: "ko",
                  })}
                </div>
              </div>
              <span className="comment">{comment.comment}</span>
            </CommentItem>
          );
        })}
      </CommentList>
    </>
  );
};

export default Comment;
