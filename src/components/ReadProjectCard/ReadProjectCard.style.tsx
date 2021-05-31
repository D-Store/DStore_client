import styled from "styled-components";
import sizes from "../../style/sizes";

export const ReadProjectCardContainer = styled.div`
  width: 100%;
`;

export const ReadProjectCardHeader = styled.div`
  display: grid;
  grid-template-areas:
    "category profile"
    "title profile"
    "title info";
  grid-template-columns: 70% 30%;
  .category {
    grid-area: category;
    width: 100%;
    font-size: ${sizes.small_font};
    display: flex;
    align-items: center;
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
  }
  .title {
    grid-area: title;
    width: 100%;
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
  }
`;
