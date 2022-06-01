export interface UserData {
  name: string;
  username: string;
  id: string;
}
export interface UserState extends UserData {
  logged: boolean;
}

export interface UserSignUpData {
  name: string;
  username: string;
  password: string;
}

export interface UserLoginData {
  username: string;
  password: string;
}
