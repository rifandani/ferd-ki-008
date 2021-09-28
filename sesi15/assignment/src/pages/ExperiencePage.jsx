import { Fragment } from "react";
import { Center, Divider } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const experiences = [
  {
    date: "01/2016 - 01/2017",
    labels: ["React", "Redux", "GraphQL"],
    role: "Junior Front End Developer",
    company: "Facebook",
    desc: "Responsible for implementing visual and interactive elements that users engage with through their web browser when using a web application.",
  },
  {
    date: "09/2017 - 09/2018",
    labels: ["Angular", "NgRx", "Firebase"],
    role: "Intermediate Front End Developer",
    company: "Google",
    desc: "Responsibilities include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application.",
  },
  {
    date: "11/2018 - 01/2020",
    labels: ["NextJS", "Cypress", "Storybook"],
    role: "Senior Front End Developer",
    company: "Netflix",
    desc: "Work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.",
  },
];

const ExperiencePage = () => {
  return (
    <>
      <Navbar />

      {experiences.map((exp, idx) => (
        <Fragment key={idx}>
          <Experience
            date={exp.date}
            labels={exp.labels}
            role={exp.role}
            company={exp.company}
            desc={exp.desc}
          />

          {idx === experiences.length - 1 ? null : (
            <Center height="100px">
              <Divider orientation="vertical" />
            </Center>
          )}
        </Fragment>
      ))}

      <Footer />
    </>
  );
};

export default ExperiencePage;
