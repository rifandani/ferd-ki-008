import React from "react";
import {
  HStack,
  VStack,
  Text,
  Heading,
  IconButton,
  InfoIcon,
  CloseIcon,
  useDisclose,
} from "native-base";
import PostItemModal from "./PostItemModal";

const PostItem = ({ id, title, desc, deletePost, updatePost }) => {
  // modal
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
      <HStack
        // flex={1}
        // w="90%"
        my={1}
        mx={5}
        px={3}
        h={60}
        overflow="hidden"
        rounded="lg"
        borderColor="cyan.200"
        borderWidth="1"
        alignItems="center"
        justifyContent="space-between"
        bgColor="cyan.50"
      >
        <VStack w="70%" h={70} justifyContent="center">
          <Heading bold maxW="300" w="80%" noOfLines={1}>
            {title}
          </Heading>
          <Text color="coolGray.500" maxW="300" w="80%" noOfLines={1}>
            {desc}
          </Text>
        </VStack>

        <IconButton
          icon={<InfoIcon size="xs" color="orange.500" />}
          onPress={onOpen}
        />
        <IconButton
          icon={<CloseIcon size="xs" color="red.500" />}
          onPress={() => deletePost(id)}
        />
      </HStack>

      {/* modal */}
      <PostItemModal
        isOpen={isOpen}
        onClose={onClose}
        post={{ id, title, desc }}
        updatePost={updatePost}
      />
    </>
  );
};

export default React.memo(PostItem);
