import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import illustration from "../assets/illustration.svg";

export default function About() {
  const { push } = useHistory();

  const goToHomePage = () => push("/");
  const goToExperiencePage = () => push("/experience");

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 20 }}
      >
        <Flex w={"full"} justifyContent="center">
          <Image
            src={illustration}
            alt="Illustration"
            height={{ sm: "16rem", lg: "20rem" }}
            // width="10"
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>

        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          👋 Hello{" "}
          <Text as={"span"} color={"purple.400"}>
            friends
          </Text>
        </Heading>

        <Text color={"gray.500"} maxW={"3xl"}>
          My name is Tri Rizeki Rifandani. I am a self-taught Javascript
          developer mainly in React.js and Node.js, who loves being involved in
          open-source communities. Would love to be a tech evangelist and see
          myself as a Chief Tech Officer in my later career.
        </Text>

        <Stack spacing={6} direction={"row"}>
          <Button rounded={"full"} px={6} onClick={goToHomePage}>
            Go to home page
          </Button>

          <Button
            rounded={"full"}
            px={6}
            colorScheme={"purple"}
            bg={"purple.400"}
            _hover={{ bg: "purple.500" }}
            onClick={goToExperiencePage}
          >
            Check my experience
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
