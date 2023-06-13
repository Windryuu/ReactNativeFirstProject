import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View, Image, ImageBackground, Alert, Modal, Pressable, FlatList} from 'react-native';
import AddButton from './components/AddButton';
import Todo from './components/Todo';
import ModalModify from './components/ModalModify';


let nextId = 2;

export default function App() {

  const [text,setText] = useState('');
  const [todos, setTodos] = useState([
    {id:1, task: 'Faire les courses'}
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editContent, setEditContent] = useState('')

  function setTodoHideModal(iditem){
    console.log(text.text)
    if(text.text){
      todos.find( arr => arr.id === iditem).task = text.text
    }
    setModalVisible(!modalVisible)
  }

  function getTodoShowModal(iditiem, textitem){
    setEditContent({id: iditiem, task:textitem})
    setModalVisible(true)
  }

  return (
  <ImageBackground source={require('./assets/defaultbg.jpg')} resizeMode='cover' style={styles.image}>
    <View style={styles.container}>
      {/* <FlatList
        data={todos}
        renderItem={({item}) => <Todo id={item.id} task={item.task}/>}
        keyExtractor={item => item.id}
      /> */}
      {todos.map(
        r=> 
        <View style={styles.input}>
          {/* <Text key={r.id}>{r.id + ' ' + r.task}</Text> */}
          <Todo id={r.id} task={r.task}/>
          
          
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => getTodoShowModal(r.id,r.task)}>
            <Text style={styles.textStyle}>Modify</Text>
          </Pressable>
          <Button 
            title='❌'
            onPress={
              ()=> setTodos(todos.filter( a => a.id !== r.id))
            }>
          </Button>
        </View>
      )}
      <View style={styles.input}>
        <TextInput
          placeholder='place holdeur'
          onChangeText={(text) => setText({text})}
          value={text}
        ></TextInput>
        <AddButton
          method = {() => setTodos([...todos,{id: nextId++, task: text.text}])}
        />
      </View>
      
      <ModalModify 
        modVis={modalVisible} 
        editProp={editContent} 
        textProp={text} 
        setTextMethod={(text) => setText(text)} 
        setTodoHideModalProp={() => setTodoHideModal(editContent.id)}/>

      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flexDirection:'row',
    // flexWrap:'wrap',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
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
