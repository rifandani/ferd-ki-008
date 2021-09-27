import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import routerLogo from "../assets/router.png";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"semibold"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.900", "gray.200")}
    >
      <Container as={Stack} py={10} maxW={"7xl"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Resources</ListHeader>

            <Link href={"#"}>Resource 1</Link>
            <Link href={"#"}>Resource 2</Link>

            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>Resource 3</Link>

              <Tag
                size={"sm"}
                bg={useColorModeValue("green.400", "green.800")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Education & Support</ListHeader>

            <Link href={"#"}>Support 1</Link>
            <Link href={"#"}>Support 2</Link>
            <Link href={"#"}>Support 3</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Popular Topics</ListHeader>

            <Link href={"#"}>Topic 1</Link>
            <Link href={"#"}>Topic 2</Link>
            <Link href={"#"}>Topic 3</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>

            <Stack direction={"row"} align={"center"} spacing={2}>
              <Icon as={FaFacebookSquare} mr={1} color={"black"} />

              <Link href={"#"}>Facebook</Link>
            </Stack>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Icon as={FaGithubSquare} mr={1} color={"black"} />

              <Link href={"#"}>Github</Link>
            </Stack>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Icon as={FaYoutubeSquare} mr={1} color={"black"} />

              <Link href={"#"}>Youtube</Link>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image
            height={7}
            objectFit="contain"
            src={routerLogo}
            alt="Router logo"
          />
        </Flex>

        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © {new Date().getFullYear()} Rifandani.
        </Text>
      </Box>
    </Box>
  );
}
