import { chakra, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const Experience = ({ date, labels, role, company, desc }) => {
  return (
    <Flex
      bg={useColorModeValue("white", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("gray.50", "gray.800")}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {date}
          </chakra.span>

          <Flex alignItems="center" gridGap={3}>
            {labels.map((label, idx) => (
              <Text
                key={idx}
                px={3}
                py={1}
                bg="gray.600"
                color="gray.100"
                fontSize="sm"
                fontWeight="700"
                rounded="md"
                _hover={{ bg: "purple.500" }}
              >
                {label}
              </Text>
            ))}
          </Flex>
        </Flex>

        <Box mt={2}>
          <Text
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
          >
            {role}
          </Text>

          <chakra.p
            mt={2}
            color={useColorModeValue("gray.600", "gray.300")}
            fontFamily="monospace"
          >
            {company}
          </chakra.p>

          <chakra.p
            mt={2}
            color={useColorModeValue("gray.600", "gray.300")}
            fontStyle="italic"
          >
            {desc}
          </chakra.p>
        </Box>
      </Box>
    </Flex>
  );
};

export default Experience;
