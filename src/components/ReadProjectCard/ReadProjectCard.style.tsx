import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const ReadProjectCardContainer = styled.div`
  width: 100%;
`;

export const ReadProjectCardHeader = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-areas:
    "category profile"
    "title profile"
    "title info";
  grid-template-columns: minmax(min-content, 900px) 1fr;
  .category {
    grid-area: category;
    width: 100%;
    font-size: ${sizes.small_font};
    display: flex;
    align-items: center;
    list-style: none;
    color: ${pallete.blue};
    font-weight: bold;
    font-size: ${sizes.mideum_font};
    li {
      margin-right: 10px;
      &::before {
        content: "#";
      }
    }
  }
  .profile {
    grid-area: profile;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .profileImg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-image: url("https://i.ytimg.com/vi/B-v0OiOCnJ0/maxresdefault.jpg");
      background-size: cover;
      background-position: center;
    }
    .profileName {
      font-size: ${sizes.mideum_font};
    }
    @media screen and (max-width: 1155px) {
      display: none;
    }
  }
  .title {
    grid-area: title;
    max-width: 900px;
    font-size: ${sizes.title_font};
    font-weight: bold;
    display: flex;
    align-items: flex-end;
  }
  .info {
    grid-area: info;
    width: 100%;
    font-size: ${sizes.mideum_font};
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    span {
      margin-left: 1rem;
    }
    @media screen and (max-width: 1155px) {
      display: none;
    }
  }
`;

export const ReadProjectCardHighLight = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-height: 506.25px;
  .titleImg {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    width: 100%;
    height: 506.25px;
    max-width: 900px;
    max-height: 506.25px;
  }
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: space-between;
    max-height: 650px;
  }
`;

export const ReadProjectCardImgList = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  box-sizing: border-box;
  overflow-y: auto;
  @media screen and (max-width: 1100px) {
    flex-direction: row;
    max-width: 900px;
  }
  .ListImg {
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 200px;
    min-height: 112.5px;
    max-height: 112.5px;
    margin-bottom: 18.75px;
  }
  .select {
    border: 3px solid #547aff;
    background-image: url("https://i.ytimg.com/vi/B-v0OiOCnJ0/maxresdefault.jpg");
  }
`;
