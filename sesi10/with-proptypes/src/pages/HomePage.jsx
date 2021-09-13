import DefaultContainer from "../containers/DefaultContainer";
import Header from "../components/Header/Header";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import Counter from "../components/Counter/Counter";

const HomePage = () => {
  return (
    <DefaultContainer>
      <Header />
      <hr className="separator" />

      <Article />
      <hr className="separator" />

      <Counter count={10} />
      <hr className="separator" />

      <Footer />
    </DefaultContainer>
  );
};

export default HomePage;
