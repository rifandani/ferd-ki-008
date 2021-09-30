import {
  Box,
  Stack,
  Flex,
  Input,
  Button,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addBacklog,
  take,
  evaluate,
  done,
} from "../redux/toolkit/slices/todos";

const Toolkit = () => {
  const [text, setText] = useState("");

  const { values } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const backlogs = values?.filter((todo) => todo.status === "BACKLOG");
  const inprogresss = values?.filter((todo) => todo.status === "IN_PROGRESS");
  const evaluations = values?.filter((todo) => todo.status === "EVALUATION");
  const dones = values?.filter((todo) => todo.status === "DONE");

  const onSaveToBacklog = () => {
    const payload = text;

    // dispatch actions
    dispatch(addBacklog(payload));
  };
  const onTake = (todoId) => {
    // dispatch actions
    dispatch(take(todoId));
  };
  const onEvaluate = (todoId) => {
    // dispatch actions
    dispatch(evaluate(todoId));
  };
  const onDone = (todoId) => {
    // dispatch actions
    dispatch(done(todoId));
  };

  return (
    <Box w="full" p={5} sx={{ minHeight: "80vh" }}>
      {/* input */}
      <Stack direction="column" spacing={10}>
        <Flex
          boxSize="full"
          direction={{ base: "column", md: "row" }}
          gridGap="10"
        >
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            w="full"
            focusBorderColor="purple.500"
            placeholder="Specify your backlog text..."
          />

          <Button
            w="52"
            variant="solid"
            _hover={{
              bgColor: "purple.400",
              color: "white",
            }}
            onClick={onSaveToBacklog}
          >
            Save to backlog
          </Button>
        </Flex>

        {/* grid */}
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={8}
        >
          {/* backlog */}
          <Flex
            direction="column"
            p={4}
            gridGap="4"
            w="100%"
            h="full"
            bg="purple.50"
            borderRadius="md"
          >
            <Box w="100%" p={4} bg="purple.500" borderRadius="md">
              <Heading fontSize="larger" color="white">
                Backlog
              </Heading>
            </Box>

            {backlogs.map((todo) => (
              <Box key={todo.id} w="100%" p={4} bg="white" borderRadius="md">
                <Text mb="4">{todo.text}</Text>

                <Button
                  variant="solid"
                  _hover={{
                    bgColor: "purple.400",
                    color: "white",
                  }}
                  onClick={() => onTake(todo.id)}
                >
                  Take
                </Button>
              </Box>
            ))}
          </Flex>

          {/* in progress */}
          <Flex
            direction="column"
            p={4}
            gridGap="4"
            w="100%"
            h="full"
            bg="yellow.50"
            borderRadius="md"
          >
            <Box w="100%" p={4} bg="yellow.500" borderRadius="md">
              <Heading fontSize="larger" color="white">
                In Progress
              </Heading>
            </Box>

            {inprogresss.map((todo) => (
              <Box key={todo.id} w="100%" p={4} bg="white" borderRadius="md">
                <Text mb="4">{todo.text}</Text>

                <Button
                  variant="solid"
                  _hover={{
                    bgColor: "yellow.400",
                    color: "white",
                  }}
                  onClick={() => onEvaluate(todo.id)}
                >
                  Evaluate
                </Button>
              </Box>
            ))}
          </Flex>

          {/* evaluation */}
          <Flex
            direction="column"
            p={4}
            gridGap="4"
            w="100%"
            h="full"
            bg="blue.50"
            borderRadius="md"
          >
            <Box w="100%" p={4} bg="blue.500" borderRadius="md">
              <Heading fontSize="larger" color="white">
                Evaluation
              </Heading>
            </Box>

            {evaluations.map((todo) => (
              <Box key={todo.id} w="100%" p={4} bg="white" borderRadius="md">
                <Text mb="4">{todo.text}</Text>

                <Button
                  variant="solid"
                  _hover={{
                    bgColor: "blue.400",
                    color: "white",
                  }}
                  onClick={() => onDone(todo.id)}
                >
                  Done
                </Button>
              </Box>
            ))}
          </Flex>

          {/* DONE */}
          <Flex
            direction="column"
            p={4}
            gridGap="4"
            w="100%"
            h="full"
            bg="green.50"
            borderRadius="md"
          >
            <Box w="100%" p={4} bg="green.500" borderRadius="md">
              <Heading fontSize="larger" color="white">
                Done
              </Heading>
            </Box>

            {dones.map((todo) => (
              <Box key={todo.id} w="100%" p={4} bg="white" borderRadius="md">
                <Text>{todo.text}</Text>
              </Box>
            ))}
          </Flex>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Toolkit;
