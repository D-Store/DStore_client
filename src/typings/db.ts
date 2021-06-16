export interface BannerType {
  id: number;
  fileLocation: string;
}
export interface CommentType {
  id: number;
  comment: string;
  createAt: string;
  user: {
    id: number;
    name: string;
    profileImage: string;
    follow: boolean;
  };
}
export interface ProjectType {
  id: number;
  title: string;
  content: string;
  createAt: string;
  tags: string[];
  mainPhoto: {
    id: number;
    fileLocation: string;
    type: string;
    thumnail: false;
  };
  files: [
    {
      id: number;
      fileLocation: string;
      type: string;
      thumnail: number;
    }
  ];
  users: [
    {
      id: number;
      name: string;
      profileImage: string;
      follow: boolean;
    }
  ];
  likeState: boolean;
  likeNum: number;
  commentNum: number;
}
export interface UserType {
  id: number;
  name: string;
  profileImage: string;
  follow: boolean;
}
