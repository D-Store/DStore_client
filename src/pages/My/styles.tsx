import styled from "@emotion/styled";
import pallete from "utils/pallete";
import sizes from "utils/sizes";
import photo from "../../assets/png/Intersect.png";

export const MyInfoCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .background {
    width: 100%;
    height: 300px;
    background-size: cover;
    background: ${pallete.main_color};
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  img {
    position: absolute;
    bottom: -12px;
    width: 168px;
    height: 168px;
    border-radius: 50%;
    box-sizing: content-box;
    border: 7px solid ${pallete.background_color};
  }
  h1 {
    text-align: center;
    margin-top: 20px;
    color: ${pallete.text_color};
    font-size: ${sizes.big_font};
    font-weight: bold;
  }
  button {
    margin-top: 20px;
    border-radius: 5px;
    width: 300px;
    padding: 16px;
    font-size: ${sizes.mideum_font};
    font-family: 500;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &.user-setting {
      width: 150px;
      position: absolute;
      background-color: ${pallete.green};
      bottom: 10px;
      right: 10px;
    }
  }
`;

export const Contaienr = styled.div`
  width: 600px;
  height: 600px;
  padding: 15px;
  overflow-y: auto;
  background-color: ${pallete.border_back};
  z-index: 999;
  border-radius: 10px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    h1 {
      font-size: ${sizes.big_font};
    }
  }
  .photo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0 10px 0;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
  .name {
    padding: 10px 0 10px 0;
    border-radius: 5px;
    border: 0.1px solid rgb(255, 255, 255, 0.3);
    input {
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      font-size: ${sizes.mideum_font};
      color: ${pallete.text_color};
      background-color: ${pallete.border_back};
      border: 0;
      outline: none;
    }
  }
  .introduce {
    padding: 10px 0 10px 0;
    border-radius: 5px;
    border: 0.1px solid rgb(255, 255, 255, 0.3);
    textarea {
      width: 100%;
      height: 200px;
      box-sizing: border-box;
      padding: 10px;
      font-size: ${sizes.mideum_font};
      color: ${pallete.text_color};
      background-color: ${pallete.border_back};
      border: 0;
      outline: none;
      resize: none;
    }
  }

  .bigBtn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .pwd {
      button {
        background-color: ${pallete.yellow};
      }
      button:hover {
        background-color: gold;
      }
    }
    .delete {
      button {
        background-color: ${pallete.red};
      }
      button:hover {
        background-color: red;
      }
    }
    button {
      width: 175px;
      height: 64px;
      margin: 10px 0 10px 0;
      font-size: ${sizes.mideum_font};
      border-radius: 5px;
      border: 0;
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }
  }
  .change {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 0 10px 0;
    button {
      width: 100px;
      height: 40px;
      color: ${pallete.text_color};
      background-color: ${pallete.main_color};
      border-radius: 5px;
      border: 0;
    }
  }
  .auth {
    display: flex;
    input {
      width: 400px;
      height: 60px;
      color: ${pallete.text_color};
      background-color: ${pallete.border_back};
      border: 0;
      font-size: ${sizes.mideum_font};
      border: 0.1px solid rgb(255, 255, 255, 0.3);
      border-radius: 5px;
      margin: 10px 0 10px 0;
    }
  }
`;
