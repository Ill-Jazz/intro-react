import './App.css';
import Header from './Components/Header';
import FormTodo from './Components/FormTodo';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';
import {useState, useEffect} from "react";//
import {v4 as uuidv4} from 'uuid';

const Local_Storage_Key = 'TodoApp.duties'

const App = () => {
const initialDuties = [{name: "My first duty", checked: false, id: uuidv4()},
    {
        name: "My second duty",
        checked: false,
        id: uuidv4()
    }];
const[duties, setDuties] = useState(initialDuties)
    useEffect(() => {
        const storedDuties = JSON.parse(localStorage.getItem(Local_Storage_Key))
        if (storedDuties) setDuties(storedDuties)
    }, []);// this will only run once when the component is initialised

    useEffect(() => {
        localStorage.setItem(Local_Storage_Key, JSON.stringify(duties))
    }, [duties]); //this will run everytime the state of the dependencies change
    return (
<div className="App">
    <Header/>
    <FormTodo setDuties={setDuties} duties = {duties}/>
    <TodoList setDuties={setDuties} duties={duties}/>
    <Footer/>
</div>
) }

export default App;
