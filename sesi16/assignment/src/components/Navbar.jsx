import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useHistory } from "react-router";

import rifandaniLogo from "../assets/rifandani.png";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { push } = useHistory();

  const goToHomePage = () => push("/");
  const goToToolkitPage = () => push("/toolkit");

  return (
    <chakra.header bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex alignItems="center">
          <Image
            src={rifandaniLogo}
            alt="Logo"
            borderRadius="full"
            height="8"
            width="8"
            _hover={{ cursor: "pointer" }}
            // onClick={}
          />

          <chakra.h1
            fontSize="xl"
            fontWeight="medium"
            ml="2"
            fontFamily="cursive"
          >
            Kanban Board
          </chakra.h1>
        </Flex>

        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{ base: "none", md: "inline-flex" }}
          >
            <Button variant="ghost" onClick={goToHomePage}>
              Home
            </Button>
            <Button variant="ghost" onClick={goToToolkitPage}>
              Toolkit
            </Button>
          </HStack>

          {/* <Button
              size="sm"
              color="white"
              bgColor="purple.400"
              _hover={{ bgColor: "purple.500" }}
            >
              Get Started
            </Button> */}

          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />

              <Button w="full" variant="ghost" onClick={goToHomePage}>
                Home
              </Button>
              <Button w="full" variant="ghost" onClick={goToToolkitPage}>
                Toolkit
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
