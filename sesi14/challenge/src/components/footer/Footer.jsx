import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="separator" />

      <p data-testid="footerText" className="footer__text">
        © 2021
      </p>
    </footer>
  );
};

export default Footer;
