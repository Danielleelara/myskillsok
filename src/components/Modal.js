import React, {useState} from 'react';
import {Modal, Text, View} from 'react-native';
import {Button} from './Button';

export function ModalCase() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <View>
      <Button onPress={() => setOpenModal(true)} />
      <Modal visible={openModal}>
        <Text>Modal</Text>
      </Modal>
    </View>
  );
}
