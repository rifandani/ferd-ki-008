import { chakra, Box, Flex, Heading, Button, Stack } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { push } = useHistory();

  const goToAboutPage = () => push("/about");

  return (
    <Box
      w="full"
      h="container.sm"
      backgroundImage="url(https://images.unsplash.com/photo-1545665277-5937489579f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80)"
      bgPos="center"
      bgSize="cover"
    >
      <Flex
        align="center"
        pos="relative"
        justify="center"
        boxSize="full"
        bg="blackAlpha.700"
      >
        <Stack textAlign="center" alignItems="center" spacing={10}>
          <Heading
            fontSize={["2xl", "2xl", "3xl"]}
            fontWeight="semibold"
            color="white"
            textTransform="uppercase"
          >
            ✨ Welcome to my{" "}
            <chakra.span
              color="purple.400"
              textDecor="underline"
              fontFamily="cursive"
            >
              Portfolio
            </chakra.span>
          </Heading>

          <Button
            rounded={"full"}
            px={6}
            colorScheme={"purple"}
            bg={"purple.400"}
            _hover={{ bg: "purple.500" }}
            onClick={goToAboutPage}
          >
            Find more about me
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Home;
