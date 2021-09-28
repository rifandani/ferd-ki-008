import { Fragment } from "react";
import { chakra, Flex, Box, useColorModeValue, Stack } from "@chakra-ui/react";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaDocker,
  FaGit,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Skill from "../components/Skill";
import Footer from "../components/Footer";

const skills = [
  {
    icon: FaReact,
    title: "React",
    desc: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
  },
  {
    icon: FaAngular,
    title: "Angular",
    desc: "Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.",
  },
  {
    icon: FaVuejs,
    title: "Vue",
    desc: "Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.",
  },
  {
    icon: FaNodeJs,
    title: "Node",
    desc: "An asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.",
  },
  {
    icon: FaDocker,
    title: "Docker",
    desc: "Developers Love Docker. Businesses Trust It. Build safer, share wider, run faster: New updates to our product subscriptions.",
  },
  {
    icon: FaGit,
    title: "Git",
    desc: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
  },
];

const SkillPage = () => {
  return (
    <>
      <Navbar />

      <Flex
        bg={useColorModeValue("white", "gray.600")}
        p={10}
        w="auto"
        justifyContent="center"
      >
        <Box py={12} bg={useColorModeValue("gray.50", "gray.800")} rounded="xl">
          <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
            <Box textAlign={{ lg: "center" }}>
              <chakra.p
                mt={2}
                fontSize={{ base: "3xl", sm: "4xl" }}
                lineHeight="8"
                fontWeight="extrabold"
                letterSpacing="tight"
                color={useColorModeValue("gray.900")}
              >
                Skills
              </chakra.p>

              <chakra.p
                mt={4}
                maxW="2xl"
                fontSize="xl"
                mx={{ lg: "auto" }}
                color={useColorModeValue("gray.500", "gray.400")}
              >
                Key skills for fullstack javascript developers these days 🎉
              </chakra.p>
            </Box>

            <Box mt={10}>
              <Stack
                spacing={{ base: 10, md: 0 }}
                display={{ md: "grid" }}
                gridTemplateColumns={{ md: "repeat(3,1fr)" }}
                gridColumnGap={{ md: 20 }}
                gridRowGap={{ md: 16 }}
              >
                {skills.map((skill, idx) => (
                  <Fragment key={idx}>
                    <Skill
                      icon={skill.icon}
                      title={skill.title}
                      desc={skill.desc}
                    />
                  </Fragment>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Footer />
    </>
  );
};

export default SkillPage;
