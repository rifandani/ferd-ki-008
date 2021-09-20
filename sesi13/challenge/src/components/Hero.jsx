import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack
      backgroundColor={"gray.700"}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
              MongoDB
            </Text>
            <br />{" "}
            <Text color={"white"} as={"span"}>
              Application Data Platform
            </Text>{" "}
          </Heading>

          <Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
            Accelerate development, address diverse data sets, and adapt quickly
            to change with a proven application data platform built around the
            database most wanted by developers 4 years running.
          </Text>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              width={40}
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}
            >
              Start Free
            </Button>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"contain"}
          src={
            "https://webimages.mongodb.com/_com_assets/cms/kmya588xyp75dl3oc-Homepage%20Hero.svg?auto=format%2Ccompress&ch=DPR"
          }
        />
      </Flex>
    </Stack>
  );
}
