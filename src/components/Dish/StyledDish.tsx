import styled from "styled-components";

export const StyledDishComponent = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  letter-spacing: 2px;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: space-around;
  width: 350px;
  height: 550px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border: 3px solid #fff;

  .image-container {
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #fff;
    width: 13rem;
    height: 13rem;
    background-size: cover;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .image-recipe {
    align-items: center;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
    transform: scale(1.2);
    max-width: 240px;
  }

  .info-text {
    width: 350px;
    height: 70px;
  }

  h2 {
    margin: 0;
    margin-top: 15px;
    text-align: left;
    color: var(--fc-primary);
    font-size: 28px;
    font-weight: 700;
  }

  p {
    text-align: left;
    text-align: justify;
    margin: 0;
    font-size: 18px;
  }

  .buttons {
    width: 60px;
    height: 60px;
    width: max-content;
    cursor: pointer;
    &::after {
      transition: transform ease-in;
    }
    position: static;
  }
  .button--edit {
    width: 40px;
    height: 40px;
  }

  .button--plus {
    cursor: default;
  }

  .buttons-container {
    display: flex;
    height: 60px;
    width: 350px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .option {
    text-align: left;
    padding: 5px 20px 5px 20px;
    color: var(--fc-secondary);
    border: 2px solid var(--fc-secondary);
    border-radius: 6px;
    font-style: italic;
    font-size: 18px;
    font-weight: 700;
    margin-top: 15px;
    margin-left: 5px;
  }
`;
