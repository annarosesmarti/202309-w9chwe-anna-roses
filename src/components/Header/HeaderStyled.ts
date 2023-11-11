import { styled } from "styled-components";

const HeaderStyled = styled.header`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.slytherinMainColor};

  .header {
    &__logo {
      width: 100px;
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
