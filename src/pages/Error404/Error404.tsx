import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components/Header/Header";

const Style4Error04Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  font-size: 26px;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 10%;
  text-align: center;
  div {
    color: var(--red);
    width: 310px;
    height: 310px;
    border-radius: 50%;
    border: 2.5px solid var(--fc-primary);
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  }
  p {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--fc-primary);
    font-size: 22px;
  }

  img {
    width: 40px;
    height: 40px;
  }
  /* p {
    margin-top: 40px;
  } */
`;

export const Error404Page = () => {
  return (
    <Style4Error04Page>
      <Header />
      <div>
        <p>
          <img src="/images/icons/bowl-food.svg" alt="Logo Dish Week"></img>
          Page <br></br>Not Found!
        </p>
      </div>
      <NavLink to={"/home"} style={{ textDecoration: "none" }}>
        <p>www.dishweek.com </p>
      </NavLink>
    </Style4Error04Page>
  );
};
