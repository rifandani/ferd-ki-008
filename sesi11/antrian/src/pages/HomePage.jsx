import DefaultContainer from "../containers/DefaultContainer";
import Header from "../components/Header/Header";
import Antrian from "../components/Antrian/Antrian";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <DefaultContainer>
      <Header title="Antrian App" />
      <hr className="separator" />

      <Antrian />
      <hr className="separator" />

      <Footer copyright="Rifandani" />
    </DefaultContainer>
  );
};

export default HomePage;
