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
