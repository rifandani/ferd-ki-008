import { chakra, Box, Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa";

const Award = ({ title, desc }) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Icon
          as={FaTrophy}
          color={useColorModeValue("purple.500", "brand.300")}
          mt={1}
          mr={2}
          w={8}
          h={8}
        />
      </Flex>

      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="bold"
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
};

export default Award;
