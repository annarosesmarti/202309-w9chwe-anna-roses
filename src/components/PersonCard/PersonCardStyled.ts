import { styled } from "styled-components";

const PersonCardStyled = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.griffindorMainColor};
  border-radius: 10px;

  .card {
    &__image {
      border-radius: 10px;
      margin-bottom: 10px;
      object-fit: contain;
      width: 100%;
      height: auto;
    }

    &__item {
      color: ${({ theme }) => theme.color.griffindorSecondaryColor};
      padding: 10px;
    }

    &__name {
      font-size: ${({ theme }) => theme.typography.cardTitleSize};
      font-weight: 700;
    }
  }
`;

export default PersonCardStyled;
