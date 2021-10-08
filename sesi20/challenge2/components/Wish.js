import * as React from 'react';
import { Text, Flex, IconButton, CloseIcon, Checkbox } from 'native-base';

function Wish({
  id,
  text,
  isCompleted,
  onDeleteWish,
  onToggleCheckbox,
}) {
  const onChangeCheckbox = (isSelected) => {
    onToggleCheckbox(id)
  };

  return (
    <Flex
      flex={1}
      p={5}
      m={5}
      direction="row"
      alignItems="center"
      rounded="lg"
      borderColor="coolGray.200"
      borderWidth="1"
      bg={isCompleted ? "blue.100" : "blue.50"}>
      <Checkbox
        onChange={onChangeCheckbox}
        value="1"
        colorScheme="info"
        size="sm"
        accessibilityLabel="Toggle isCompleted"
      />

      <Text bold flex={1} maxW="300" w="80%" ml={2} strikeThrough={isCompleted}>
        {text}
      </Text>

      <IconButton
        icon={<CloseIcon size="xs" color="red.500" />}
        onPress={() => onDeleteWish(id)}
      />
    </Flex>
  );
}

export default Wish;
