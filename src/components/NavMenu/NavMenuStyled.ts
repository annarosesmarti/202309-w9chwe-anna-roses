import styled from "styled-components";

const NavMenuStyled = styled.ul`
  width: 100%;
  position: absolute;
  top: 110px;
  background-color: ${({ theme }) => theme.color.revenclawMainColor};
  color: ${({ theme }) => theme.color.slytherinSecondaryColor};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: fixed;

  .nav-menu {
    &__container {
      display: flex;
      flex-direction: row;
    }

    &__item {
      padding: 10px 20px 10px 0px;
    }

    &__item:hover {
      color: white;
    }
  }

  .active {
    color: white;
  }
`;

export default NavMenuStyled;
