import "./AntrianItem.css";

const AntrianItem = ({ text }) => {
  return (
    <span className="antrian__list__item animate__animated animate__backInLeft">
      {text}
    </span>
  );
};

export default AntrianItem;
