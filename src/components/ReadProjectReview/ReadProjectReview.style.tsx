import styled from "styled-components";
import sizes from "../../style/sizes";
import pallete from "../../style/pallete";

interface IPropsProjectReviewType {
  isLike: boolean;
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
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .profile {
    width: 50px;
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
    height: 100%;
    border-radius: 20px;
    background-color: ${pallete.input_back};
  }
  .isLike {
    width: 125px;
    height: 100%;
    border-radius: 20px;
    background-color: ${pallete.input_back};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      background-color: ${props => props.isLike && "red"};
    }
    div {
      font-size: ${sizes.mideum_font};
      font-weight: bold;
      text-align: center;
    }
  }
`;
