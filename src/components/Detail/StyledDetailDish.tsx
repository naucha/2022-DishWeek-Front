import styled from "styled-components";

export const StyledDetailDish = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #fff;
  border-radius: 32px;
  width: 375px;
  max-width: 460px;
  min-width: 300px;
  margin-bottom: 40px;

  .detail {
    &__image {
      border-radius: 32px 32px 0 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      border-bottom: 3px solid #fff;
      width: 375px;
      max-width: 460px;
      min-width: 300px;
    }
    &__info {
      &__heading {
        margin: 0;
        margin-top: 15px;
        text-align: left;
        color: var(--fc-primary);
        font-size: 26px;
        font-weight: 700;
        padding: 5px;
      }
      &__cookingtime {
        text-align: left;
        text-align: justify;
        margin: 0;
        font-size: 18px;
        padding: 5px;
      }
    }
    &__icons {
      display: flex;
      flex-direction: row;
      padding-top: 10px;
      cursor: default;
      width: max-content;
      width: 350px;
      height: 60px;
      justify-content: space-between;
      &__add {
        width: 60px;
        align-items: flex-start;
      }
      align-items: center;
      &__option {
        text-align: left;
        padding: 5px 20px 5px 20px;
        color: var(--fc-secondary);
        border: 2px solid var(--fc-secondary);
        border-radius: 6px;
        font-style: italic;
        font-size: 18px;
        font-weight: 700;
        margin-left: 5px;
      }
    }

    &__main {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin: 0;
      align-items: flex-end;
      &__list {
        list-style: none;
        padding-left: 0;
        width: 340px;
        max-width: 460px;
        min-width: 300px;
      }
    }

    &__method {
      &__label {
        margin: 15px 0 0 10px;
        margin-top: 15px;
        text-align: left;
        color: var(--fc-primary);
        font-size: 24px;
        font-weight: 700;
        text-decoration: underline;
      }
      &__content {
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 30px;
        letter-spacing: 3px;
        line-height: 1.6;
        text-align: justify;
      }
    }
    &__exit {
      width: 350px;
      display: flex;
      justify-content: flex-end;
      padding-right: 8px;
      &__icon {
        display: flex;
        cursor: pointer;
        width: 30px;
        margin-bottom: 15px;
      }
    }
  }
`;
