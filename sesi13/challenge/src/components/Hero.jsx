import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      backgroundColor={"gray.700"}
      minH={"100vh"}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Flex
        p={8}
        flex={1}
        align={{ base: "start", md: "center" }}
        justify={{ base: "start", md: "center" }}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text
              as={"span"}
              color={"white"}
              position={"relative"}
              zIndex={2}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              MongoDB
            </Text>
            <br />{" "}
            <Text
              color={"white"}
              as={"span"}
              textAlign={{ base: "center", md: "left" }}
            >
              Application Data Platform
            </Text>{" "}
          </Heading>

          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"white"}
            textAlign={{ base: "center", md: "left" }}
          >
            Accelerate development, address diverse data sets, and adapt quickly
            to change with a proven application data platform built around the
            database most wanted by developers 4 years running.
          </Text>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              width={{ base: "100%", md: 40 }}
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}
              isLoading={isOpen}
              onClick={onOpen}
            >
              Start Free
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader color={"green.400"}>Thank You</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam pulvinar eget tellus ut sollicitudin. In pretium diam
                  vel arcu pretium facilisis. Nullam congue sem non erat
                  vehicula, fermentum tincidunt justo volutpat. Nam ac lectus
                  velit. Praesent ac dolor eget lorem molestie hendrerit et nec
                  nulla. Vivamus aliquet eu lacus quis dictum. Mauris a aliquam
                  nisi, quis scelerisque dolor. Donec eu erat in lectus commodo
                  aliquam vitae quis metus. Vestibulum pulvinar quam et
                  hendrerit dictum. Aliquam risus ligula, mollis vel magna non,
                  molestie faucibus turpis. Maecenas lobortis arcu leo. Aliquam
                  accumsan sem in odio hendrerit sodales. Duis euismod id dui
                  cursus finibus. Etiam cursus semper sodales.
                </ModalBody>

                <ModalFooter>
                  <Button variant="ghost" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    bg={"green.400"}
                    color={"white"}
                    _hover={{
                      bg: "green.500",
                    }}
                    onClick={onClose}
                  >
                    Cool
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1} justify={"center"} align={"center"}>
        <Image
          alt={"Login Image"}
          objectFit={"contain"}
          height={{ base: "50%", md: "85%" }}
          width={{ base: "50%", md: "85%" }}
          marginTop={{ base: "0", md: "10" }}
          src={
            "https://webimages.mongodb.com/_com_assets/cms/kmya588xyp75dl3oc-Homepage%20Hero.svg?auto=format%2Ccompress&ch=DPR"
          }
        />
      </Flex>
    </Stack>
  );
}
