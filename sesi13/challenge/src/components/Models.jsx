import {
  Stack,
  Heading,
  Flex,
  Image,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";

const Models = () => {
  return (
    <Stack
      px={{ base: "8", md: "8", lg: "32" }}
      mx={{ base: "0", md: "0", lg: "8" }}
      py="16"
      flex={1}
      spacing="5"
      direction="column"
      backgroundColor="gray.700"
    >
      <Heading color="gray.300" fontSize="small" letterSpacing="widest">
        CLOUD OR SELF-MANAGED
      </Heading>

      <Text color="white" fontSize="x-large" fontWeight="bold">
        Choose the right deployment model for your organization
      </Text>

      <Divider />

      <Stack
        py="8"
        flex={1}
        gridGap={{ base: "10", md: "8", lg: "20" }}
        direction={{ base: "column", md: "row", lg: "row" }}
        justify={{ base: "start", md: "space-between", lg: "space-between" }}
      >
        <Flex
          direction={{ base: "column", md: "column", lg: "row" }}
          gridGap="5"
        >
          <Image
            height={{ base: "15%", lg: "30%" }}
            width={{ base: "15%", lg: "30%" }}
            src="https://webimages.mongodb.com/_com_assets/cms/kljy1q0egjr7rltwv-mongodb-atlas-cluster.png?auto=format%2Ccompress&ch=DPR&fix=max&h=64&dpr=3&q=35"
            objectFit={"contain"}
            color="green.500"
            alt={"Mongodb Atlas Cluster"}
          />

          <Flex direction="column" gridGap="1">
            <Heading color="green.500" fontSize="medium" letterSpacing="widest">
              MONGODB ATLAS
            </Heading>
            <Text color="white" fontSize="larger" fontWeight="bold">
              Multi-cloud database service
            </Text>
            <Text color="white" my="5">
              The most advanced cloud database on the market, with unmatched
              data distribution and mobility across AWS, Azure, and Google
              Cloud, built-in automation for resource and performance
              optimization, and much more.
            </Text>

            <Button
              width={40}
              bg={"green.400"}
              color={"white"}
              _hover={{
                backgroundColor: "green.500",
              }}
            >
              Learn more
            </Button>
          </Flex>
        </Flex>
        <Flex
          direction={{ base: "column", md: "column", lg: "row" }}
          gridGap="5"
        >
          <Image
            height={{ base: "15%", lg: "30%" }}
            width={{ base: "15%", lg: "30%" }}
            src="https://webimages.mongodb.com/_com_assets/cms/kljy2mlbyk9i9mvhy-Leaf-Forest.png?auto=format%2Ccompress&ch=DPR&fix=max&h=64&dpr=3&q=35"
            objectFit={"contain"}
            color="green.500"
            alt={"Mongodb Atlas Cluster"}
          />

          <Flex direction="column" gridGap="1">
            <Heading color="green.500" fontSize="medium" letterSpacing="widest">
              MONGODB ENTERPRISE ADVANCED
            </Heading>
            <Text color="white" fontSize="larger" fontWeight="bold">
              Run it yourself
            </Text>
            <Text color="white" my="5">
              Run MongoDB on-premises or in your private & hybrid cloud
              environments with confidence using enterprise-grade security
              capabilities and a package of software, support, and services
              designed to help your teams reduce cost, risk, and effort.
            </Text>

            <Button
              width={40}
              bg={"green.400"}
              color={"white"}
              _hover={{
                backgroundColor: "green.500",
              }}
            >
              Learn more
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Models;
