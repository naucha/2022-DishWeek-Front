import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
import { loginUserThunk } from "../../redux/thunks/userThunks";
import StyledForm from "../styles/StyledForm";

const LogInForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const blanckFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blanckFields);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(blanckFields);
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(loginUserThunk(formData));
    resetForm();
  };

  return (
    <StyledForm>
      <h2>Welcome back</h2>
      <p className="greeting">Happy to see you again, let's cook.</p>
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
            Log In
          </button>
          <p className="change-form">
            Don't have an account?{" "}
            <NavLink to={"/register"} style={{ textDecoration: "none" }}>
              {" "}
              <span>Sign Up</span>
            </NavLink>
          </p>
        </div>
      </form>
    </StyledForm>
  );
};

export default LogInForm;
