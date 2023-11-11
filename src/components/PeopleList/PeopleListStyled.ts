import { styled } from "styled-components";

const PeopleListStyled = styled.ul`
  padding: 15px;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: start;
  gap: 10px;

  .card {
    margin-bottom: 10px;
  }

  @media (min-width: 380px) {
    .card {
      width: 350px;
    }
  }

  @media (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default PeopleListStyled;
