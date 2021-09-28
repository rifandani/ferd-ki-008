import { chakra, Box, Flex, useColorModeValue, Icon } from "@chakra-ui/react";

export default function Skill({ icon, title, desc }) {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          bg={useColorModeValue("purple.400")}
          color="white"
          _hover={{
            bg: "purple.500",
          }}
        >
          <Icon as={icon} w={8} h={8} />
        </Flex>
      </Flex>

      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          color={useColorModeValue("gray.900")}
        >
          {title}
        </chakra.dt>

        <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
          {desc}
        </chakra.dd>
      </Box>
    </Flex>
  );
}
