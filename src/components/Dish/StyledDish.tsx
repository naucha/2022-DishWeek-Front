import styled from "styled-components";

export const StyledDishComponent = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 32px;
  letter-spacing: 2px;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: space-around;
  width: 350px;
  height: 550px;
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: 2px solid #fff;
  .image-recipe {
    align-items: center;
    justify-content: center;
    width: 236px;
    height: 236px;
    border: 2px solid #fff;
    border-radius: 50%;
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
