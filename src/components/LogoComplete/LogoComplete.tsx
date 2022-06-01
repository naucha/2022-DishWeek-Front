import { StyledLogoComplete } from "./SyledLogoComplete";

const LogoComplete = () => {
  return (
    <>
      <StyledLogoComplete>
        <div className="container-logo">
          <h1>
            Dish<br></br>Week
          </h1>
          <img src="/images/icons/bowl-food.svg" alt="Icon bowl of food" />
        </div>
        <p>
          Hello there, create your <br></br>weekly menu
        </p>
      </StyledLogoComplete>
    </>
  );
};

export default LogoComplete;
