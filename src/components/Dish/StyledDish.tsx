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
  padding-left: 18px;
  padding-right: 18px;
  border: 3px solid #fff;

  .image-container {
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #fff;
    width: 13rem;
    height: 13rem;
    background-image: url("happy-face.jpg");
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
  h3 {
    margin: 0;
    margin-top: 15px;
    text-align: left;
    color: #1c3b5e;
    font-size: 35px;
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
  }

  .dish_buttons {
    display: flex;
    height: 60px;
    width: 350px;
    justify-content: space-between;
    align-items: center;
  }
`;
