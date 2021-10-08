import React from 'react';
import {
  Text,
  FlatList,
  Flex,
  AddIcon,
  FormControl,
  Input,
  WarningOutlineIcon,
  IconButton,
} from 'native-base';

// You can import from local files
import Wish from '../components/Wish';

export default function WishlistScreen() {
  const [input, setInput] = React.useState('');
  const [wishes, setWishes] = React.useState([]);
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  // checkbox
  const [groupValues, setGroupValues] = React.useState([])

  const onAddWish = () => {
    if (!input) {
      setIsInvalid(true);
      setErrorMessage("Don't empty input field");
      return;
    } else if (wishes.find((wish) => wish.text === input)) {
      setIsInvalid(true);
      setErrorMessage("Can't add same wish");
      return;
    }

    setIsInvalid(false);
    setErrorMessage('');
    setWishes((prev) => [
      ...prev,
      {
        id: Math.random().toString().substr(2, 15),
        text: input,
        isCompleted: false,
      },
    ]);
  };

  const onDeleteWish = (wishId) => {
    setWishes((prev) => prev.filter((wish) => wish.id !== wishId));
  };

  const onToggleCheckbox = (wishId) => {
    setWishes((prev) => prev.map((wish) => {
      if(wish.id === wishId) {
        wish.isCompleted = !wish.isCompleted
      }

      return wish
    }));
  };

  return (
    <Flex direction="column">
      <Text p={5} fontSize={20} fontWeight="bold" bg="blue.200">
        Wishlist
      </Text>

      <Flex direction="row" p={5} flex={1} height={100}>
        <FormControl isInvalid={isInvalid}>
          <Input
            w="100%"
            bg="gray.50"
            placeholder="Add new wish..."
            errorMessage="Don't empty the input text"
            value={input}
            onChangeText={(text) => setInput(text)}
            InputRightElement={
              <IconButton
                icon={<AddIcon size="xs" my={2} mx={2} />}
                colorScheme="blue"
                onPress={onAddWish}
              />
            }
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errorMessage}
          </FormControl.ErrorMessage>
        </FormControl>
      </Flex>

      <FlatList
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
      />
    </Flex>
  );
}
