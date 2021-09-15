import "./Footer.css";

const Footer = ({ copyright, comp }) => {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {copyright || "unknown"} - {new Date().getFullYear()}
      </p>

      {comp}
    </footer>
  );
};

export default Footer;
