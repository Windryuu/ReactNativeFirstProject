import { Button, StyleSheet, Switch, Text, TextInput, View, Image, ImageBackground, Alert, Modal, Pressable} from 'react-native';

export default function ModalModify(props){
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modVis}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!props.modVis);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <TextInput
                  placeholder={props.editProp.task}
                  onChangeText={(text) => props.setTextMethod({text})}
                  value={props.textProp}
                ></TextInput>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={props.setTodoHideModalProp}>
                  <Text style={styles.textStyle}>Confirm modification</Text>  
                </Pressable>
              </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });