export interface State {
  userInfo: User;
  logged: boolean;
}
export interface User {
  name: string;
  username: string;
  id: string;
}

export interface UserSignUpData {
  name: string;
  username: string;
  password: string;
}
