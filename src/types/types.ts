export interface UserData {
  name: string;
  username: string;
  id: string;
}
export interface UserState extends UserData {
  logged: boolean;
}
export interface UserRegisterData {
  name: string;
  username: string;
  password: string;
}

export interface UserLoginData {
  username: string;
  password: string;
}

export interface UserLoginResponse {
  data: { token: string };
}

export interface DishesData {
  id: string;
  name: string;
  veggie: string;
  ingredients: string;
  image: string;
  resume: string;
  recipe: string;
  cookingtime: string;
  daysofweek: string[];
  createdby: string;
}
export interface IDishesUserData {
  name: string;
  veggie: string;
  ingredients: string;
  image: string | File;
  resume: string;
  recipe: string;
  cookingtime: string;
}
