import { Fragment } from "react";
import {
  chakra,
  useColorModeValue,
  Flex,
  Box,
  SimpleGrid,
  GridItem,
  Stack,
} from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Award from "../components/Award";
import Footer from "../components/Footer";

const awards = [
  {
    title: "Android Enthusiast",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio diam, venenatis ut dui a, volutpat congue velit. Sed eros massa, feugiat et blandit eu, pharetra sit amet elit. Sed sit amet varius quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ut augue vel gravida.",
  },
  {
    title: "Azure Cloud Enthusiast",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio diam, venenatis ut dui a, volutpat congue velit. Sed eros massa, feugiat et blandit eu, pharetra sit amet elit. Sed sit amet varius quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ut augue vel gravida.",
  },
  {
    title: "AWS Architect Enthusiast",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio diam, venenatis ut dui a, volutpat congue velit. Sed eros massa, feugiat et blandit eu, pharetra sit amet elit. Sed sit amet varius quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ut augue vel gravida.",
  },
  {
    title: "React Enthusiast",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio diam, venenatis ut dui a, volutpat congue velit. Sed eros massa, feugiat et blandit eu, pharetra sit amet elit. Sed sit amet varius quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ut augue vel gravida.",
  },
  {
    title: "GraphQL Enthusiast",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio diam, venenatis ut dui a, volutpat congue velit. Sed eros massa, feugiat et blandit eu, pharetra sit amet elit. Sed sit amet varius quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ut augue vel gravida.",
  },
  {
    title: "Kubernetes Enthusiast",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio diam, venenatis ut dui a, volutpat congue velit. Sed eros massa, feugiat et blandit eu, pharetra sit amet elit. Sed sit amet varius quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ut augue vel gravida.",
  },
];

const AwardPage = () => {
  return (
    <>
      <Navbar />
      <Flex
        bg={useColorModeValue("white", "gray.600")}
        p={20}
        w="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          bg={useColorModeValue("gray.50", "gray.800")}
          px={8}
          py={20}
          mx="auto"
        >
          <SimpleGrid
            alignItems="center"
            columns={{ base: 1, lg: 3 }}
            spacingY={{ base: 10, lg: 32 }}
            spacingX={{ base: 10, lg: 24 }}
          >
            <Box alignSelf="start">
              <chakra.h2
                mb={3}
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("black")}
                lineHeight="shorter"
                letterSpacing="tight"
              >
                Award
              </chakra.h2>

              <chakra.p
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.500")}
              >
                All achievements, awards, and milestones that I achieved in my
                journey 🏆
              </chakra.p>
            </Box>

            <GridItem colSpan={2}>
              <Stack
                spacing={{ base: 10, md: 0 }}
                display={{ md: "grid" }}
                gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                gridColumnGap={{ md: 8 }}
                gridRowGap={{ md: 10 }}
              >
                {awards.map((award, idx) => (
                  <Award key={idx} title={award.title} desc={award.desc} />
                ))}
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Flex>
      ;
      <Footer />
    </>
  );
};

export default AwardPage;
