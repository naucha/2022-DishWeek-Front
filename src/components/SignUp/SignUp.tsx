import { useState } from "react";
import StyledSignUpFormComponent from "./SignUpStyle";

const SignUpForm = (): JSX.Element => {
  const emptyFields = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyFields);

  const changeData = (event: { target: { id: any; value: any } }) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <StyledSignUpFormComponent>
      <h2>Welcome</h2>
      <p className="greeting">Hello there, please sign up to continue</p>
      <form
        className="signup-form"
        noValidate
        autoComplete="off"
        onSubmit={() => {}}
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
    </StyledSignUpFormComponent>
  );
};

export default SignUpForm;