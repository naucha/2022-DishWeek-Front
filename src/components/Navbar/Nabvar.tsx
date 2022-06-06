import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../redux/store/hooks";
import { Filter } from "../Filter/Filter";

const StyledNavbar = styled.div`
  .navbar {
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
`;

export const Navbar = () => {
  const { logged } = useAppSelector((state) => state.user);

  return (
    <>
      <StyledNavbar>
        <nav className="navbar">
          <ul>
            <li>
              {logged ? (
                <Link to="/home">Dishes</Link>
              ) : (
                <Link to="/login">Log In</Link>
              )}
            </li>
            <li>{logged ? <Link to="/home">My Week</Link> : ""}</li>
            <li>
              {logged ? (
                <Link to="/home">Create</Link>
              ) : (
                <Link to="/register">Register</Link>
              )}
            </li>
          </ul>
        </nav>
        {logged ? <Filter /> : ""}
      </StyledNavbar>
    </>
  );
};
