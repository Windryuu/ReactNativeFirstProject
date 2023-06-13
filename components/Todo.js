import {Text} from 'react-native';

export default function Todo(props){
    return(
        <Text key={props.id}>{props.id + ' ' + props.task}</Text>
    )
}