import { useHistory } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const { push } = useHistory();

  // const goToUsers = () => {
  //   push("/users");
  // };

  return (
    <div className="hero">
      <h1 data-testid="heroTitle" className="hero__title">
        Why do we need Test
      </h1>

      <p data-testid="heroSubtitle" className="hero__subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <button
        data-testid="heroButton"
        className="hero__button"
        onClick={() => push("/users")}
      >
        Users List
      </button>
    </div>
  );
};

export default Hero;
