import Navbar from "../components/Navbar";
import Toolkit from "../components/Toolkit";
import Footer from "../components/Footer";

import { Spinner, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useGetTodosQuery } from "../redux/toolkit/slices/todosApi";
import { fetchTodos } from "../redux/toolkit/slices/todos";

const ToolkitPage = () => {
  // const { data } = useGetTodosQuery("");
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
    setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />

      {isReady ? (
        <Toolkit />
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

export default ToolkitPage;
