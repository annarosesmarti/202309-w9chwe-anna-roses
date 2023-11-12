import { styled } from "styled-components";

const HomePageStyled = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  top: 0;

  .header {
    &__title {
      margin-top: 150px;
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
