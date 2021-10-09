import React from "react";
import { Text, IconButton } from "native-base";

const PostItem = ({ id, title, desc }) => {
  return (
    <Flex
      p={5}
      m={5}
      direction="row"
      alignItems="center"
      rounded="lg"
      borderColor="coolGray.200"
      borderWidth="1"
      bg="cyan.50"
    >
      <Text bold flex={1} ml={2}>
        {title}
      </Text>

      <IconButton
        icon={<CloseIcon size="xs" color="red.500" />}
        // onPress={() => onDeleteWish(id)}
      />
    </Flex>
  );
};

export default PostItem;
