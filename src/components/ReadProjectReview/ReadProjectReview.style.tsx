import styled from "styled-components";
import sizes from "../../style/sizes";
import pallete from "../../style/pallete";
import Like from "../../public/static/svg/Like.svg";
import UnLike from "../../public/static/svg/UnLike.svg";

interface IPropsProjectReviewType {
  isLike?: boolean;
}

export const ReadProjectReviewContainer = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
`;

export const ReadProjectReviewForm = styled.form`
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: space-between;
  textarea {
    width: 675px;
    resize: none;
    background-color: ${pallete.input_back};
    border-radius: 20px;
    border: none;
    outline: none;
    color: white;
    font-size: ${sizes.mideum_font};
    font-family: inherit;
    padding: 1rem;
  }
  button {
    width: 180px;
    border-radius: 20px;
    background-color: #547aff;
    border: none;
    color: white;
    font-size: ${sizes.mideum_font};
    font-weight: bold;
  }
`;

export const ReadProjectReviewList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ReadProjectReviewItem = styled.div<IPropsProjectReviewType>`
  margin-top: 30px;
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .profile {
    min-width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: ${pallete.input_back};
    background-image: url("https://i.ytimg.com/vi/B-v0OiOCnJ0/maxresdefault.jpg");
    background-size: cover;
    background-position: center;
  }
  .content {
    padding: 1rem;
    width: 675px;
    min-height: 150px;
    border-radius: 20px;
    background-color: ${pallete.input_back};
  }
  .isLike {
    width: 125px;
    min-height: 150px;
    border-radius: 20px;
    background-color: ${pallete.input_back};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    path {
      fill: ${(props) => (props.isLike && "rgb(238, 85, 85)") || "black"};
    }
    div {
      font-size: ${sizes.mideum_font};
      font-weight: bold;
      text-align: center;
    }
  }
`;
