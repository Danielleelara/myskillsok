import React, {useState} from 'react';
import {Modal, Text, View, StyleSheet, Button} from 'react-native';

export function ModalCase() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <View>
      <Button onPress={() => setOpenModal(true)} title="Abrir Modal" />
      <View style={styles.container}>
        <Modal
          visible={openModal}
          style={styles.container}
          animationType="slide">
          <Text>Modal</Text>
          <Button onPress={() => setOpenModal(false)} title="Fechar Modal" />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    height: '50%',
    marginTop: 22,
  },
});
