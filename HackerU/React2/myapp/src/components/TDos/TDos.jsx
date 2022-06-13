import React, {useState} from 'react'
import AddToDo from '../AddTodo/AddToDo';
import ToDoList from '../ToDoList';
import s from './TDos.module.sass';

export default function TDos() {
  const [todo, setTodo] = useState([
    {
        id:1, 
        title:'run',
        description:'i like'},
    {
        id:2, 
        title:'sky',
        description:'i like'},
    {
        id:3, 
        title:'tennis',
        description:'i like'},
   {
        id:4, 
        title:'cross',
        description:'i like'}    
  ]);  
const addToDo = (id, title, description) => {
    setTodo(prev => [...prev, {id, title, description}]);
};

const deleteTodo = id => {
    setTodo(prev => prev.filter(t => t.id !== id));
};

  return (
    <div className={s.todos}>
        <h1>Work today</h1>
        <p>Im tired</p>
        <AddToDo addToDo = {addToDo}/> 
        <ToDoList todo = {todo} deleteTodo = {deleteTodo}/> 
    </div>
  )
}