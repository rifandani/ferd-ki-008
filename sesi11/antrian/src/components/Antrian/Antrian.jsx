import { Fragment, useState } from "react";
import "./Antrian.css";
import AntrianItem from "./AntrianItem/AntrianItem";

const Antrian = () => {
  const [text, setText] = useState("");
  const [antrian, setAntrian] = useState([]);

  const antrikan = () => {
    setAntrian((prev) => [text, ...prev]); // add antrian
    setText(""); // clear input field
  };
  const majukan = () => {
    setAntrian((prev) => {
      const cloneAntrian = [...prev];
      cloneAntrian.pop();

      return cloneAntrian;
    }); // remove first antrian
    setText(""); // clear input field
  };

  return (
    <section className="antrian">
      {/* input */}
      <input
        className="antrian__input"
        type="text"
        placeholder="Input antrian..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          console.log(e);
          if (text.length > 0 && e.key === "Enter") {
            antrikan();
          }
        }}
        onKeyPress={(e) => {
          if (antrian.length >= 1 && e.shiftKey && e.key === "Enter") {
            majukan();
          }
        }}
      />

      {/* button */}
      <div className="antrian__buttonContainer">
        <button
          onClick={antrikan}
          className="antrian__buttonContainer__button"
          disabled={text.length === 0}
        >
          Antrikan !
        </button>

        <button
          onClick={majukan}
          className="antrian__buttonContainer__button"
          disabled={antrian.length === 0}
        >
          Majukan !
        </button>
      </div>

      {/* antrian list */}
      <div className="antrian__list">
        {antrian.length === 0 ? (
          <AntrianItem text="Antrian Kosong" />
        ) : (
          antrian.map((text, i) => (
            <Fragment key={i}>
              {i > 0 && <span> ⬅ </span>}
              <AntrianItem text={text} />
            </Fragment>
          ))
        )}
      </div>
    </section>
  );
};

export default Antrian;
