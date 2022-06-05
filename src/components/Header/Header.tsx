import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  letter-spacing: 3px;
  padding: 14px 0;
  margin-top: 20px;
  h1 {
    align-items: center;
    margin: 0;
    font-size: 36px;
    color: var(--fc-primary);
    font-weight: 800;
    text-align: center;
  }

  .header {
    color: var(--fc-primary);
    &--main {
      width: 100%;
      padding: 10px 0 6px 0;
      border-top: 2px solid var(--fc-primary);
      margin-bottom: 2px;
      display: flex;
      align-items: flex-end;
      justify-content: space-evenly;

      &-logout {
        color: var(--red);
        margin: 0;
        font-size: 22px;
        margin-bottom: 4px;
        background: none;
        border: none;
        font-family: "Merriweather", sans-serif;
        font-weight: bolder;
        padding: 0;
        cursor: pointer;
      }
    }

    &--nav {
      width: 100%;
      display: flex;
      flex-direction: row;
      font-size: 22px;
      color: var(--fc-primary);
      border-bottom: 2px solid var(--fc-primary);
      border-top: 2px solid var(--fc-primary);
      margin: 0;
      padding: 0;

      ul {
        display: flex;
        flex-direction: row;
        width: 100%;
        list-style: none;
        list-style-type: none;
        text-decoration: none;
        margin: 0;
        padding: 0;
        margin-bottom: 10px;
        margin-top: 12px;
        align-content: center;
        justify-content: space-around;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }

    &--filter {
      width: 100%;
      display: flex;
      flex-direction: row;
      font-size: 22px;
      color: var(--fc-primary);
      border-bottom: 2px solid var(--fc-primary);
      text-decoration: none;
      text-decoration-style: none;
      text-decoration-line: none;
      padding: 12px 0;
      margin: 0;
      justify-content: space-around;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;

export const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <div className="header--main">
        <h1>
          Dish<br></br>Week
        </h1>
        <button className="header--main-logout" onClick={() => {}}>
          Logout
        </button>
      </div>
      <nav className="header--nav">
        <ul>
          <li>
            <Link to="/home">Dishes</Link>
          </li>
          <li>
            <Link to="/home">My Week</Link>
          </li>
          <li>
            <Link to="/home">Create</Link>
          </li>
        </ul>
      </nav>
      <p className="header--filter">
        <a href="/filterlist">Veggy</a>
      </p>
    </StyledHeader>
  );
};
