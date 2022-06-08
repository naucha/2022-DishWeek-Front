import styled from "styled-components";

const StyledFilter = styled.div`
  .filter {
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
`;

export const Filter = () => {
  return (
    <StyledFilter>
      <p className="filter">
        <a href="/home">Veggie</a>
      </p>
    </StyledFilter>
  );
};
