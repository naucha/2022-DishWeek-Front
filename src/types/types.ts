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
  name: string;
  veggy: boolean;
  ingredients: string[];
  image: string;
  resume: string;
  recipe: string;
  cookingTime: string;
  daysOfWeek: string[];
  createdBy: string;
}
