import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Flex, Spinner } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import { fetchTodosLegacy } from "../redux/legacy/actions/todosLegacyAction";

const HomePage = () => {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    dispatch(fetchTodosLegacy());
    setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />

      {isReady ? (
        <Home />
      ) : (
        <Flex p={10} alignItems="center" justifyContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}

      <Footer />
    </>
  );
};

export default HomePage;
