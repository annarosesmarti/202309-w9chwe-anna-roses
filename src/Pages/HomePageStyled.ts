import { styled } from "styled-components";

const HomePageStyled = styled.header`
  padding: 20px;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      font-size: ${({ theme }) => theme.typography.titleSize};
      color: ${({ theme }) => theme.color.hufflepuffSecondaryColor};
    }

    &__subtitle {
      font-size: ${({ theme }) => theme.typography.cardTitleSize};
      color: ${({ theme }) => theme.color.hufflepuffSecondaryColor};
    }
  }
`;

export default HomePageStyled;
