import { styled } from "styled-components";

const HeaderStyled = styled.header`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  gap: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.slytherinMainColor};

  .header {
    position: fixed;

    &__logo {
      width: 80px;
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    &__title,
    &__text {
      color: ${({ theme }) => theme.color.slytherinSecondaryColor};
    }
    &__title {
      padding: 5px;
    }
  }
`;

export default HeaderStyled;
