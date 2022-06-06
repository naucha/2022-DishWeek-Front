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

  .url-web {
    align-items: center;
    color: var(--fc-primary);
    font-size: 22px;
    margin-top: 40px;
  }

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 10%;
  }

  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--fc-primary);
    font-size: 26px;
    margin-top: 40px;
  }
`;

export const Error404Page = () => {
  return (
    <Style4Error04Page>
      <Header />
      <div>
        <p className="not-found">
          <img src="/images/icons/bowl-food.svg" alt="Logo Dish Week"></img>
          Page <br></br>Not Found!
        </p>
      </div>
      <NavLink to={"/home"} style={{ textDecoration: "none" }}>
        <p className="url-web">www.dishweek.com </p>
      </NavLink>
    </Style4Error04Page>
  );
};
