import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loginUserThunk } from "../../redux/thunks/userThunks";
import { UserLoginData } from "../../types/types";
import StyledForm from "../styles/StyledForm";

const LogInForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const userStateInfo = useAppSelector((state) => state.user.logged);

  const blanckFields: UserLoginData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<UserLoginData>(blanckFields);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate, userStateInfo]);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(blanckFields);
  };

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await dispatch(loginUserThunk(formData));
    resetForm();
  };

  return (
    <StyledForm>
      <h2>Welcome back</h2>
      <p className="greeting">Happy to see you again</p>
      <form className="form" noValidate autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={formData.username}
          onChange={changeData}
          placeholder="Enter your username"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          placeholder="Enter your password"
        />
        <div>
          <button
            className="button"
            type="submit"
            disabled={formData.username === "" || formData.password === ""}
          >
            {" "}
            Log In
          </button>
          <p className="change-form">
            Don't have an account?
            <NavLink to={"/register"} style={{ textDecoration: "none" }}>
              <span className="change-form__link"> Sign Up</span>
            </NavLink>
          </p>
        </div>
      </form>
    </StyledForm>
  );
};

export default LogInForm;
