import styled from "styled-components";

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
    width: 280px;
    height: 280px;
    border-radius: 50%;
    border: 3px solid var(--fc-primary);
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  }
  span {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--fc-primary);
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const Error404Page = () => {
  return (
    <Style4Error04Page>
      <div>
        <span>
          <img src="/images/icons/bowl-food.svg" alt="Logo Dish Week"></img>
          Page <br></br>Not Found!
        </span>
      </div>
    </Style4Error04Page>
  );
};
