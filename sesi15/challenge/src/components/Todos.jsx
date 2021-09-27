import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const GET_TODOS_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const resp = await fetch(GET_TODOS_URL);
    const result = await resp.json();

    setTodos(result);
  };

  return (
    <>
      <Table variant="simple" my={10}>
        <TableCaption>Todos List</TableCaption>
        <Thead>
          <Tr bgColor="gray.700">
            <Th color="white">ID</Th>
            <Th color="white">Title</Th>
            <Th color="white">Completed</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos.map((todo, idx) => (
            <Tr key={idx}>
              <Td>{todo.id}</Td>
              <Td>{todo.title}</Td>
              <Td>{todo.completed ? "✔" : "❌"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Todos;
