import { chakra, Box, Flex, useColorModeValue, Icon } from "@chakra-ui/react";

const Interest = ({ color, icon, title }) => {
  return (
    <Box justifySelf="center">
      <Flex
        alignItems="center"
        justifyContent="center"
        w={8}
        h={8}
        mb={4}
        rounded="full"
        color={useColorModeValue(`${color}.600`, `${color}.100`)}
        bg={useColorModeValue(`${color}.100`, `${color}.600`)}
      >
        <Icon as={icon} w={8} h={8} />
      </Flex>

      <chakra.h3
        mb={2}
        fontWeight="semibold"
        lineHeight="shorter"
        color={useColorModeValue("gray.900")}
      >
        {title}
      </chakra.h3>
    </Box>
  );
};

export default Interest;
