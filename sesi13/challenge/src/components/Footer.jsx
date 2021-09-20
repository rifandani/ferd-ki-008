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
import mongodbLogo from "../assets/mongodb.png";

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

            <Link href={"#"}>NoSQL Database Explained</Link>
            <Link href={"#"}>MongoDB Architecture Guide</Link>

            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>MongoDB Engineering Blog</Link>

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

            <Link href={"#"}>View Course Catalog</Link>
            <Link href={"#"}>Certification</Link>
            <Link href={"#"}>MongoDB Manual</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Popular Topics</ListHeader>

            <Link href={"#"}>MongoDB on AWS</Link>
            <Link href={"#"}>MongoDB on Google Cloud</Link>
            <Link href={"#"}>Migrate to MongoDB Atlas</Link>
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
            src={mongodbLogo}
            alt="MongoDB logo"
          />
        </Flex>

        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © {new Date().getFullYear()} MongoDB, Inc.
        </Text>
        <Text pt={3} fontSize={"sm"} textAlign={"center"}>
          Mongo, MongoDB, and the MongoDB leaf logo are registered trademarks of
          MongoDB, Inc.
        </Text>
      </Box>
    </Box>
  );
}
