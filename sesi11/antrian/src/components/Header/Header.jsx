import "./Header.css";

const Header = ({ title }) => {
  return (
    <header className="header">
      <p className="header__title">{title || "My App"}</p>
    </header>
  );
};

export default Header;
