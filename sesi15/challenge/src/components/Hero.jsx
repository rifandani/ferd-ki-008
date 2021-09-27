import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import routerLogo from "../assets/router.png";

export default function Hero() {
  return (
    <Stack
      backgroundColor={"gray.700"}
      minH={"100vh"}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Flex
        p={8}
        flex={1}
        align={{ base: "start", md: "center" }}
        justify={{ base: "start", md: "center" }}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text
              as={"span"}
              color={"white"}
              position={"relative"}
              zIndex={2}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              React Router
            </Text>
            <br />{" "}
            <Text
              color={"white"}
              as={"span"}
              textAlign={{ base: "center", md: "left" }}
            >
              Routing Library
            </Text>{" "}
          </Heading>

          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"white"}
            textAlign={{ base: "center", md: "left" }}
          >
            To get started with React Router in a web app, you’ll need a React
            web app. If you need to create one, we recommend you try Create
            React App. It’s a popular tool that works really well with React
            Router.
          </Text>
        </Stack>
      </Flex>

      <Flex flex={1} justify={"center"} align={"center"}>
        <Image
          alt={"React Router"}
          objectFit={"contain"}
          height={{ base: "50%", md: "55%" }}
          width={{ base: "50%", md: "55%" }}
          marginTop={{ base: "0", md: "10" }}
          borderRadius={50}
          src={routerLogo}
        />
      </Flex>
    </Stack>
  );
}
