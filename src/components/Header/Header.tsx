import styled from "styled-components";
import { useAppSelector } from "../../redux/store/hooks";
import { Navbar } from "../Navbar/Nabvar";

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

  img {
    width: 80px;
    height: 80px;
    color: var();
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
  }
`;

export const Header = (): JSX.Element => {
  const { logged } = useAppSelector((state) => state.user);
  return (
    <StyledHeader>
      <div className="header--main">
        <h1>
          Dish<br></br>Week
        </h1>
        {!logged ? (
          ""
        ) : (
          <button className="header--main-logout" onClick={() => {}}>
            Logout
          </button>
        )}
      </div>
      <Navbar />
    </StyledHeader>
  );
};
