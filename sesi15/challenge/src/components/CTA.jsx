import { Stack, Flex, Heading, Text, Button } from "@chakra-ui/react";

const CTA = () => {
  return (
    <Stack
      mx={{ base: "0", md: "0", lg: "8" }}
      my={{ base: "0", md: "0", lg: "8" }}
      px={{ base: "8", md: "8", lg: "32" }}
      py="12"
      flex={1}
      spacing="10"
      direction={{ base: "column", md: "row" }}
      background="rgba(0, 0, 0, 0) linear-gradient(279.06deg, rgb(17, 97, 73) 0%, rgb(33, 49, 60) 99.99%, rgb(33, 46, 55) 100%) repeat scroll 0% 0% / cover"
    >
      <Flex direction="column" gridGap="8" flex={1}>
        <Heading color="white" fontSize="x-large" fontWeight="bold">
          Ready to start building?
        </Heading>
        <Text color="white" flexWrap="wrap">
          Launch a new cluster or migrate to MongoDB Atlas today, with zero
          downtime.
        </Text>

        <Button
          width={40}
          bg={"green.400"}
          color={"white"}
          _hover={{
            backgroundColor: "green.500",
          }}
        >
          Get started now
        </Button>
      </Flex>

      <Flex direction="column" gridGap="8" flex={1}>
        <Heading color="white" fontSize="x-large" fontWeight="bold">
          Looking for enterprise solutions?
        </Heading>
        <Text color="white">
          Speak to our team of experts to discover how MongoDB Atlas can drive
          your organization to success.
        </Text>

        <Button
          width={40}
          bg={"green.400"}
          color={"white"}
          _hover={{
            backgroundColor: "green.500",
          }}
        >
          Learn more
        </Button>
      </Flex>
    </Stack>
  );
};

export default CTA;
