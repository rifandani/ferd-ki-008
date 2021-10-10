import React from "react";
import { Modal, Button, Input, FormControl } from "native-base";

const styles = {
  top: {
    marginBottom: "auto",
    marginTop: "10%",
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto",
  },
  left: {
    marginLeft: 0,
    marginRight: "auto",
  },
  right: {
    marginLeft: "auto",
    marginRight: 0,
  },
  center: {},
};

const PostItemModal = ({ isOpen, onClose, post, updatePost }) => {
  const [title, setTitle] = React.useState(() => post.title || "");
  const [desc, setDesc] = React.useState(() => post.desc || "");

  const onUpdate = async () => {
    await updatePost(post.id, {
      title,
      desc,
      id: post.id,
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      // avoidKeyboard
      justifyContent="flex-end"
      bottom="4"
      size="xl"
      animationPreset="slide"
    >
      <Modal.Content {...styles["top"]}>
        <Modal.CloseButton />
        <Modal.Header>Edit Post</Modal.Header>
        <Modal.Body>
          <FormControl mt="3">
            <FormControl.Label>Title</FormControl.Label>
            <Input
              bg="gray.50"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Description</FormControl.Label>
            <Input
              bg="gray.50"
              value={desc}
              onChangeText={(text) => setDesc(text)}
            />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button flex="1" variant="outline" onPress={onClose}>
            Cancel
          </Button>
          <Button flex="1" ml={2} onPress={onUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default React.memo(PostItemModal);
