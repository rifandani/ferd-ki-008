import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        © Tri Rizeki Rifandani - {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
