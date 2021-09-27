import { Stack, Flex, Image, Heading, Text, Icon } from "@chakra-ui/react";
import {
  HiOutlineDatabase,
  HiOutlineCode,
  HiOutlineGlobe,
} from "react-icons/hi";

const Feature = ({ reverted, feature }) => {
  return (
    <Stack
      flex={1}
      direction={{ base: "column", md: reverted ? "row-reverse" : "row" }}
      my={{ base: "8", md: "10", lg: reverted ? "20" : "10" }}
    >
      <Flex flex={1} justify={"center"} align={"center"}>
        <Image
          objectFit={"contain"}
          height={{ base: "100%", lg: "75%" }}
          width={{ base: "90%", lg: "75%" }}
          mx={{ base: "5", md: "8" }}
          src={feature.imgSrc}
        />
      </Flex>

      <Flex
        p={8}
        pr={{ base: 8, md: 8, lg: reverted ? "0" : "32" }}
        pl={{ base: 8, md: 8, lg: reverted ? "32" : "0" }}
        flex={1}
        direction={"column"}
        justify={"center"}
        gridGap={"5"}
      >
        <Heading fontSize={{ base: "xl", md: "3xl" }} color={"green.500"}>
          {feature.heading}
        </Heading>
        <Text color={"gray.600"} sx={{ fontSize: "15px" }}>
          {feature.desc}
        </Text>

        <Stack
          p={5}
          flex={1}
          direction={"row"}
          justify={"space-between"}
          gridGap={"5"}
          backgroundColor={"gray.50"}
          borderRadius={5}
        >
          <Flex gridGap={1} flex={1} direction={"column"}>
            <Icon as={HiOutlineDatabase} w={6} h={6} color="green.300" />

            <Text color={"gray.600"} sx={{ fontSize: "12px" }}>
              {feature.stackOne}
            </Text>
          </Flex>
          <Flex gridGap={1} flex={1} direction={"column"}>
            <Icon as={HiOutlineCode} w={6} h={6} color="green.300" />

            <Text color={"gray.600"} sx={{ fontSize: "12px" }}>
              {feature.stackTwo}
            </Text>
          </Flex>
          <Flex gridGap={1} flex={1} direction={"column"}>
            <Icon as={HiOutlineGlobe} w={6} h={6} color="green.300" />

            <Text color={"gray.600"} sx={{ fontSize: "12px" }}>
              {feature.stackThree}
            </Text>
          </Flex>
        </Stack>

        <Text
          color={"green.500"}
          fontWeight={"bold"}
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          {feature.extra} ⮕
        </Text>
      </Flex>
    </Stack>
  );
};

export default Feature;
