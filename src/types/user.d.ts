export interface UserType {
  id: number;
  name: string;
  profileImage: string;
  follow: boolean;
}

export interface UserSignUpType {
  email: string;
  password: string;
  name: string;
}
