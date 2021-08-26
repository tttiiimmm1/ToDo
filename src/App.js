import React, {useState} from 'react'; 
import AddTodo from './AddTodo';
import Todo from './Todo';


export default function App () {
    const [currentTodo, setCurrentTodo] = useState("Hello")
    const [allTodos, setAllTodos] = useState([])
    return (
                //key for uniquely identifying array items
        <>
            <AddTodo currentTodo = {currentTodo} setCurrentTodo = {setCurrentTodo} setAllTodos = {setAllTodos}/>
            {allTodos.map( (todo, i) => <Todo text = {todo} key = {i}/>)}
        </>
    )
}