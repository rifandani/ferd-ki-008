import {
  FaBasketballBall,
  FaBaseballBall,
  FaChess,
  FaFootballBall,
  FaGolfBall,
  FaBowlingBall,
} from "react-icons/fa";
import {
  chakra,
  useColorModeValue,
  Flex,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Interest from "../components/Interest";
import Footer from "../components/Footer";

const interests = [
  {
    color: "yellow",
    icon: FaBasketballBall,
    title: "Basketball",
  },
  {
    color: "red",
    icon: FaBaseballBall,
    title: "Baseball",
  },
  {
    color: "purple",
    icon: FaChess,
    title: "Chess",
  },
  {
    color: "green",
    icon: FaFootballBall,
    title: "Football",
  },
  {
    color: "orange",
    icon: FaGolfBall,
    title: "Golf",
  },
  {
    color: "blue",
    icon: FaBowlingBall,
    title: "Bowling",
  },
];

const InterestPage = () => {
  return (
    <>
      <Navbar />

      <Flex
        bg={useColorModeValue("white", "gray.600")}
        p={10}
        w="auto"
        justifyContent="center"
      >
        <Box
          px={8}
          py={20}
          mx="auto"
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Box textAlign={{ lg: "center" }}>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900")}
            >
              Interests
            </chakra.p>

            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              Aside from coding, I also have interest with these kind of topics
              💖
            </chakra.p>
          </Box>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacingX={{ base: 16, lg: 24 }}
            spacingY={20}
            mt={20}
          >
            {interests.map((int, idx) => (
              <Interest
                key={idx}
                color={int.color}
                icon={int.icon}
                title={int.title}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>

      <Footer />
    </>
  );
};

export default InterestPage;
