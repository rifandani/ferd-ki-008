import DefaultContainer from "../containers/DefaultContainer";
import TimerClass from "../components/TimerClass/TimerClass";
import TimerFunc from "../components/TimerFunc/TimerFunc";
import Users from "../components/Users/Users";

const HomePage = () => {
  return (
    <DefaultContainer>
      <TimerClass />

      <br />
      <br />
      <br />

      <TimerFunc />

      <br />
      <br />
      <br />

      <Users />
    </DefaultContainer>
  );
};

export default HomePage;
