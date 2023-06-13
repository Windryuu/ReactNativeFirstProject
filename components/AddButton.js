import { Button } from 'react-native';

export default function AddButton(props){
    return (
        <Button
          title='Add'
          onPress={
            props.method
          }
        ></Button>
    )
}