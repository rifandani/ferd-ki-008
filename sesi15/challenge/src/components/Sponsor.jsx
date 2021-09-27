import { Stack, Heading, Flex, Icon } from "@chakra-ui/react";
import {
  FcCdLogo,
  FcGoogle,
  FcWikipedia,
  FcVlc,
  FcSteam,
  FcSignature,
} from "react-icons/fc";

const Sponsor = () => {
  return (
    <Stack
      px={{ base: "8", md: "8", lg: "32" }}
      py={{ base: "8", md: "8", lg: "20" }}
      flex={1}
      spacing="10"
      backgroundColor="gray.50"
    >
      <Heading
        color="green.500"
        fontSize={{ base: "2xl", lg: "3xl", xl: "4xl" }}
      >
        Powering mission-critical applications and systems for global
        organizations
      </Heading>

      <Flex
        gridGap={{ base: "14", md: "28", lg: "28" }}
        wrap="wrap"
        justify="center"
      >
        <Icon as={FcCdLogo} w={24} h={24} />
        <Icon as={FcGoogle} w={24} h={24} />
        <Icon as={FcWikipedia} w={24} h={24} />
        <Icon as={FcVlc} w={24} h={24} />
        <Icon as={FcSteam} w={24} h={24} />
        <Icon as={FcSignature} w={24} h={24} />
      </Flex>
    </Stack>
  );
};

export default Sponsor;
