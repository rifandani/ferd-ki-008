import React from "react";
import { Alert } from "react-native";
import {
  Flex,
  Text,
  FormControl,
  Input,
  Button,
  AddIcon,
  FlatList,
} from "native-base";
import PostItem from "../components/PostItem";
import {
  getPosts,
  postPost,
  deletePostById,
  putPostById,
} from "../services/posts";

const PostsScreen = () => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    _getPosts();
  }, []);

  const _getPosts = async () => {
    const json = await getPosts();

    setPosts(json);
  };

  const addPost = async () => {
    if (!title || !desc) {
      Alert.alert("Input Error", "Please fill in all input fields");
      return;
    }

    const newPost = {
      title,
      desc,
      id: Math.random().toString().substr(2, 15),
    };

    await postPost(newPost);

    setPosts([...posts, newPost]);
    setTitle("");
    setDesc("");
  };

  const updatePost = React.useCallback(async (postId, updatedPost) => {
    await putPostById(postId, updatedPost);

    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          post = updatedPost;
        }

        return post;
      })
    );
  }, []);

  const deletePost = React.useCallback(async (postId) => {
    await deletePostById(postId);

    setPosts((prev) => prev.filter((post) => post.id !== postId));
  }, []);

  return (
    <Flex direction="column" flex={1}>
      <Text
        p={5}
        fontSize={20}
        borderBottomRadius={20}
        fontWeight="bold"
        bg="cyan.400"
      >
        Posts
      </Text>

      <Flex direction="row" p={5} height={200}>
        <FormControl>
          <Input
            w="100%"
            bg="gray.50"
            placeholder="Title..."
            value={title}
            onChangeText={(text) => setTitle(text)}
          />

          <Input
            isFullWidth
            my={3}
            bg="gray.50"
            placeholder="Description..."
            value={desc}
            onChangeText={(text) => setDesc(text)}
          />

          <Button leftIcon={<AddIcon size="xs" />} onPress={addPost}>
            Submit
          </Button>
        </FormControl>
      </Flex>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostItem
            id={item.id}
            title={item.title}
            desc={item.desc}
            deletePost={deletePost}
            updatePost={updatePost}
          />
        )}
      />
    </Flex>
  );
};

export default PostsScreen;
