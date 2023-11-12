import HeaderStyled from "./HeaderStyled";

interface HeaderText {
  titleText: string;
  subtitleText: string;
}

const Header = ({
  titleText,
  subtitleText,
}: HeaderText): React.ReactElement => {
  return (
    <HeaderStyled className="header">
      <img
        src="/images/hogwarts.webp"
        alt="Hogwarts logo"
        className="header__logo"
      />
      <div className="header__text-block">
        <h1 className="header__title">{titleText}</h1>
        <span className="header__text">·{subtitleText}</span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
