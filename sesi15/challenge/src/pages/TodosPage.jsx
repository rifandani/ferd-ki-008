import { Redirect } from "react-router";
import Navbar from "../components/Navbar";
import Todos from "../components/Todos";
import Footer from "../components/Footer";
import useLocalStorage from "../hooks/useLocalStorage";

const TodosPage = () => {
  const [isLoggedIn] = useLocalStorage("isLoggedIn");

  if (!isLoggedIn) {
    alert("Please login first");

    return <Redirect to="/login" />;
  }

  return (
    <>
      <Navbar />

      <Todos />

      <Footer />
    </>
  );
};

export default TodosPage;
