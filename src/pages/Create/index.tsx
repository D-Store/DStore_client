import useInput from "hooks/useInput";
import autosize from "autosize";
import {
  Button,
  CreateForm,
  Input,
  Error,
  TextArea,
  HashInput,
  MakerList,
  MakerItem,
  ImageUpload,
  SearchedMakerList,
} from "./styles";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { Redirect, useHistory } from "react-router-dom";
import React from "react";
import { customAxios } from "utils/customAxios";
import { UserType } from "typings/db";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { toast } from "react-toastify";

const Create = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [title, onChangeTitle] = useInput("");
  const [content, onChangeContent] = useInput("");
  const [hashTag, onChangeHashTag] = useInput("");
  const [makerName, onChangeMakerName] = useInput("");
  const [searchedMakerList, setSearchedMakerList] =
    useState<UserType[] | undefined>(undefined);
  const [makers, setMakers] = useState<UserType[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState<any>();
  const history = useHistory();

  const { data: userData, error } = useSWR("/user/me", fetcher);

  const handleDeleteMaker = useCallback(
    (id: number) => {
      setMakers(makers.filter(maker => maker.id !== id));
    },
    [makers]
  );
  const mapMakers = makers.map((maker, index) => {
    return (
      <MakerItem key={maker.id}>
        <div className="meta">
          <img
            src={
              maker.profileImage ||
              "https://mblogthumb-phinf.pstatic.net/20150417_264/ninevincent_14291992723052lDb3_JPEG/kakao_11.jpg?type=w2"
            }
            alt={`${maker.name}의 프로필`}
          />
          <p>{maker.name}</p>
        </div>
        <div
          className="maker-delete"
          onClick={() => handleDeleteMaker(maker.id)}
        >
          &times;
        </div>
      </MakerItem>
    );
  });

  const mapHashTag = hashTag.split(/\s*(#\S+)\s*/).map((item, index) => {
    if (item.includes("#")) {
      return (
        <li className="hash-tag" key={index}>
          {item}
        </li>
      );
    }
    return null;
  });

  const handleCreateProject = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (title && content && makers.length > 0) {
        setIsLoading(true);
        let form = new FormData();

        const tags = hashTag
          .split(/\s*(#\S+)\s*/)
          .map(tag => tag.replace("#", ""))
          .filter(tag => tag !== "");

        const users = makers.map(user => user.id);

        form.append("title", title);
        form.append("content", content);

        users.forEach(user => {
          form.append("users", String(user));
        });
        tags.forEach(tag => {
          form.append("tags", tag);
        });
        selectedFiles.forEach((file: any) => {
          form.append("files", file);
        });

        // form.append("users", JSON.stringify(users));
        // form.append("tags", JSON.stringify(tags));

        customAxios
          .post(`/project`, form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(response => {
            setIsLoading(false);
            toast.success(response.data.message);
            history.push("/");
          })
          .catch(error => {
            setIsLoading(false);
            toast.error(error.response.data.message);
          });
      }
    },
    [content, title, makers, hashTag, selectedFiles, history]
  );

  const handleUserSearch = useCallback(
    (e: any) => {
      onChangeMakerName(e);
      if (makerName) {
        customAxios
          .get(`/user`, {
            params: {
              name: makerName,
            },
          })
          .then(response => {
            setSearchedMakerList(response.data.userList);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        setSearchedMakerList(undefined);
      }
    },
    [onChangeMakerName, makerName, setSearchedMakerList]
  );

  const handleFileInput = useCallback(e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    const filesInArr = Array.from(e.target.files);

    reader.onloadend = () => {
      setSelectedFiles(filesInArr);
      setUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }, []);

  if (!userData) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <Redirect to="/" />;
  }

  return (
    <CreateForm>
      <Logo
        onClick={() => {
          history.push("/");
        }}
      />
      <h1>프로젝트 제목</h1>
      <Input
        type="text"
        value={title}
        onChange={onChangeTitle}
        placeholder="프로젝트의 제목을 입력해주세요."
        style={{
          width: "500px",
        }}
        className={title.length === 0 ? "error" : ""}
      />
      {title.length === 0 ? <Error>제목은 공백이 될 수 없습니다.</Error> : null}
      <h1>프로젝트 내용</h1>
      <TextArea
        value={content}
        onChange={onChangeContent}
        placeholder="프로젝트의 내용을 입력해주세요. (잘 이해할 수 있게 적는게 중요해요.)"
        style={{
          width: "500px",
        }}
        ref={textareaRef}
        className={content.length === 0 ? "error" : ""}
      />
      {content.length === 0 ? (
        <Error>내용은 공백이 될 수 없습니다.</Error>
      ) : null}
      <h1>만든 사람</h1>
      <Input
        style={{
          width: "500px",
        }}
        value={makerName}
        onChange={handleUserSearch}
        placeholder="나 자신을 포함한 프로젝트에 기여한 사람을 넣어주세요!"
        className={makers.length === 0 ? "error" : ""}
      />
      {searchedMakerList !== undefined && makerName !== "" && (
        <SearchedMakerList>
          {searchedMakerList.map(user => {
            return (
              <li
                onClick={() => {
                  setSearchedMakerList(undefined);
                  setMakers([...makers, user]);
                }}
                key={user.id}
              >
                <img src={user.profileImage} alt={`${user.name}의 프로필`} />
                <p>{user.name}</p>
                <span>{user.follow && <>팔로우 함</>}</span>
              </li>
            );
          })}
        </SearchedMakerList>
      )}
      {makers.length === 0 && (
        <Error>반드시 한명 이상의 사람이 있어야합니다.</Error>
      )}
      <MakerList>
        {mapMakers}
        <div className="total-maker">총 {makers.length}명</div>
      </MakerList>

      <HashInput
        style={{
          width: "500px",
        }}
        placeholder="#해시태그를 #입력해주세요"
        value={hashTag}
        onChange={onChangeHashTag}
      />
      <ul className="hashs">{mapHashTag}</ul>

      <input type="file" multiple onChange={handleFileInput} />
      {url && <img src={url.toString()} alt="" />}
      {/* {selectedFiles&&
      selectedFiles.map(file=>(
        <img src={file.} alt=""/>
      ))} */}

      <Button
        style={{
          width: "100px",
        }}
        type="submit"
        onClick={handleCreateProject}
      >
        {isLoading ? "등록 중..." : "만들기"}
      </Button>
    </CreateForm>
  );
};

export default Create;
