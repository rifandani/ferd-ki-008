import { Component } from "react";
import DefaultContainer from "../containers/DefaultContainer";
import Header from "../components/Header/Header";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import Counter from "../components/Counter/Counter";

class CustomChildComp extends Component {
  render() {
    return <span className="footer__text">CustomChildComp</span>;
  }
}

class HomePage extends Component {
  render() {
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
  }
}

export default HomePage;
