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
      profileImage: spring;
      follow: boolean;
    }
  ];
  likeState: boolean;
  likeNum: number;
  commentNum: number;
}
