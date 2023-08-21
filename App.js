import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Modal } from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const modalView = () => {
    setModalVisible(true);
  };

  const modalClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image style={{width:350,height:100}} source={require('./go_autonomous.png')}/>
      <Text>Thomas Lindinger</Text>
      <Text>Software Engineer</Text>
      <Button title='Contact Me' onPress={modalView}/>
      <StatusBar style="auto" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={modalClose}
      > 
      <View style={styles.modalContainer}>
        <Text>+45 51 82 46 70</Text>
        <Text>thomas@goautonomous.io</Text>
        <Button title='Close' onPress={modalClose} />
      </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '100',
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    marginVertical: 4
  }
});
