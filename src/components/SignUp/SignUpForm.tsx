import { useState } from "react";
import { useAppDispatch } from "../../redux/store/hooks";
import { signUpUserThunk } from "../../redux/thunks/thunks";
import StyledSignUpForm from "./StyledSignUpForm";

const SignUpForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const blanckFields = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blanckFields);

  const changeData = (event: { target: { id: any; value: any } }) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(blanckFields);
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(signUpUserThunk(formData));
    resetForm();
  };

  return (
    <StyledSignUpForm>
      <h2>Welcome</h2>
      <p className="greeting">Hello there, please sign up to continue</p>
      <form
        className="signup-form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          value={formData.name}
          onChange={changeData}
          placeholder="Enter your name"
        />

        <label htmlFor="username"> Username </label>
        <input
          id="username"
          value={formData.username}
          onChange={changeData}
          placeholder="Enter your username"
        />

        <label htmlFor="password"> Password </label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          placeholder="Enter your password"
        />
        <div>
          <button
            className="sign-up"
            type="submit"
            disabled={
              formData.username === "" ||
              formData.password === "" ||
              formData.name === ""
            }
          >
            Sign Up
          </button>
          <p className="change-form">
            Don't have an account? <span>Sign In</span>
          </p>
        </div>
      </form>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
