import React from "react";
import {
  Flex,
  Text,
  FormControl,
  Input,
  WarningOutlineIcon,
  Button,
  AddIcon,
  FlatList,
} from "native-base";

const GET_POSTS_URL = "http://localhost:5000/posts";

const PostsScreen = () => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [posts, setPosts] = React.useState([]);
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = React.useState("");
  const [descErrorMessage, setDescErrorMessage] = React.useState("");

  React.useEffect(() => {
    // getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const resp = await fetch(GET_POSTS_URL);
      const json = await resp.json();

      setPosts(json);
      console.log(posts);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex direction="column" flex={1}>
      <Text p={5} fontSize={20} fontWeight="bold" bg="cyan.400">
        Posts
      </Text>

      <Flex direction="row" p={5} flex={1} height={100}>
        <FormControl isInvalid={isInvalid}>
          <Input
            w="100%"
            bg="gray.50"
            errorMessage="Don't empty the input title"
            placeholder="Title..."
            value={title}
            onChangeText={(text) => setTitle(text)}
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {titleErrorMessage}
          </FormControl.ErrorMessage>

          <Input
            isFullWidth
            my={3}
            bg="gray.50"
            placeholder="Description..."
            value={desc}
            onChangeText={(text) => setDesc(text)}
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {descErrorMessage}
          </FormControl.ErrorMessage>

          <Button leftIcon={<AddIcon size="xs" />}>Submit</Button>
        </FormControl>
      </Flex>

      {/* <FlatList
        data={wishes}
        renderItem={({ item }) => (
          <Wish
            id={item.id}
            text={item.text}
            isCompleted={item.isCompleted}
            onDeleteWish={onDeleteWish}
            onToggleCheckbox={onToggleCheckbox}
          />
        )}
        keyExtractor={(item) => item.id}
      /> */}
    </Flex>
  );
};

export default PostsScreen;
