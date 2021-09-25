import { Stack, Heading, Flex, Icon, Text } from "@chakra-ui/react";
import { IoSchoolOutline, IoBookOutline, IoCodeSlash } from "react-icons/io5";

const Resources = () => {
  return (
    <Stack
      px={{ base: "8", md: "8", lg: "32" }}
      py="16"
      flex={1}
      spacing="10"
      direction="column"
    >
      <Heading color="gray" fontSize="small" letterSpacing="widest">
        DEVELOPER RESOURCES
      </Heading>

      <Stack
        py="8"
        flex={1}
        gridGap={{ base: "10", md: "8", lg: "20" }}
        direction={{ base: "column", md: "row", lg: "row" }}
        justify={{ base: "start", md: "space-between", lg: "space-between" }}
      >
        <Flex>
          <Icon
            as={IoSchoolOutline}
            w={12}
            h={12}
            color="green.500"
            marginRight="10"
          />

          <Flex direction="column" gridGap="1">
            <Text fontWeight="bold">Learn with MongoDB</Text>
            <Text
              fontWeight="bold"
              color="green.500"
              _hover={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Learn more ⮕
            </Text>
          </Flex>
        </Flex>

        <Flex>
          <Icon
            as={IoBookOutline}
            w={12}
            h={12}
            color="green.500"
            marginRight="10"
          />

          <Flex direction="column" gridGap="1">
            <Text fontWeight="bold">Technical documentation</Text>
            <Text
              fontWeight="bold"
              color="green.500"
              _hover={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Learn more ⮕
            </Text>
          </Flex>
        </Flex>

        <Flex>
          <Icon
            as={IoCodeSlash}
            w={12}
            h={12}
            color="green.500"
            marginRight="10"
          />

          <Flex direction="column" gridGap="1">
            <Text fontWeight="bold">Developer community</Text>
            <Text
              fontWeight="bold"
              color="green.500"
              _hover={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Learn more ⮕
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Resources;
