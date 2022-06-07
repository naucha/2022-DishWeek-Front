import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components/Header/Header";

const Style4Error04Page = styled.div`
  text-align: center;

  img {
    width: 100px;
    height: 100px;
  }

  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--fc-primary);
    font-size: 36px;
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
    </Style4Error04Page>
  );
};
