import * as React from "react";
import {
  Text,
  HStack,
  Box,
  IconButton,
  CloseIcon,
  Checkbox,
} from "native-base";

function Wish({ id, text, isCompleted, onDeleteWish, onToggleCheckbox }) {
  const onChangeCheckbox = (isSelected) => {
    onToggleCheckbox(id);
  };

  return (
    <Box
      my={1}
      mx={5}
      px={3}
      overflow="hidden"
      rounded="lg"
      borderColor="coolGray.200"
      borderWidth="1"
      bg={isCompleted ? "blue.100" : "blue.50"}
    >
      <HStack
        w="100%"
        h={50}
        alignItems="center"
        justifyContent="space-between"
      >
        <Checkbox
          onChange={onChangeCheckbox}
          value="1"
          justifyContent="center"
          accessibilityLabel="Toggle isCompleted"
        />

        <Text bold maxW="300" w="80%" ml={2} strikeThrough={isCompleted}>
          {text}
        </Text>

        <IconButton
          icon={<CloseIcon size="xs" color="red.500" />}
          onPress={() => onDeleteWish(id)}
        />
      </HStack>
    </Box>
  );
}

export default Wish;
