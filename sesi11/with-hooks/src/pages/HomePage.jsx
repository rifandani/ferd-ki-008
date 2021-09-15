import DefaultContainer from "../containers/DefaultContainer";
import Header from "../components/Header/Header";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import Counter from "../components/Counter/Counter";

const CustomChildComp = () => (
  <span style={{ textAlign: "center" }}>CustomChildComp</span>
);

const HomePage = () => {
  return (
    <DefaultContainer>
      <Header title="My First ⚛ App" />
      <hr className="separator" />

      <Article />
      <hr className="separator" />

      <Counter count={2} crementValue={5} />
      <hr className="separator" />

      <Footer copyright="Rifandani" comp={<CustomChildComp />} />
    </DefaultContainer>
  );
};

export default HomePage;
