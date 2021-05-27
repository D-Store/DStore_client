export interface ProjectType {
  id: number;
  title: string;
  content: string;
  createAt: string;
  tags: string[];
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
}
