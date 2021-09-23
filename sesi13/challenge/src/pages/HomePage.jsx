import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import Sponsor from "../components/Sponsor";

const Features = [
  {
    imgSrc:
      "https://webimages.mongodb.com/_com_assets/cms/kqwtr0hzlq9numclj-Updated%20Homepage%201.svg?auto=format%2Ccompress&ch=DPR",
    heading: "The database for modern applications",
    desc: "MongoDB’s document data model naturally supports JSON and its expressive query language is simple for developers to learn and use. Functionality such as automatic failover, horizontal scaling, and the ability to assign data to a location are built-in.",
    stackOne: "Flexible and intuitive data model",
    stackTwo: "Data as code",
    stackThree: "Unlimited scalability",
    extra: "Learn more",
  },
  {
    imgSrc:
      "https://webimages.mongodb.com/_com_assets/cms/kmya68yyst9rhl69z-Homepage%202.svg?auto=format%2Ccompress&ch=DPR&w=1075",
    heading: "Modernize your data infrastructure",
    desc: "Radically simplify your data infrastructure with an application data platform that powers your transactional, search, mobile, and real-time analytics workloads on any cloud.",
    stackOne: "Fully managed",
    stackTwo: "Unified API",
    stackThree: "Transparent data movement",
    extra: "Discover MongoDB Cloud",
  },
];

const HomePage = () => {
  return (
    <>
      <Navbar />

      <Hero />

      {Features.map((feature, idx) => (
        <Feature key={idx} reverted={idx === 1} feature={feature} />
      ))}

      <Sponsor />

      <Footer />
    </>
  );
};

export default HomePage;
