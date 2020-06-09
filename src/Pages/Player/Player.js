import React, {useState} from 'react';
import styled from 'styled-components'

function Todo({todo, index, finalize, todoremove}){
  return(
    <div style= {{textDecoration: todo.iscomplete ? 'line-through' : ''}} className="todo">{todo.text}<button onClick={()=>finalize(index)}>finalize</button><button onClick = {()=>todoremove(index)}>X</button></div>
  )
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add todo..." onChange={e=> setValue(e.target.value)} />
    </form>
  )
}

function Player() {
  const [todos, setTodos] = useState([
    {
      text: "first comment",
      iscomplete: false
    },
    {
      text: "second comment",
      iscomplete: false
    },
    {
      text: "third comment",
      iscomplete: false
    }
  ])

  const addTodo = text=>{
    const newTodos = [...todos,{ text }];
    setTodos(newTodos)
  }
  
  const finalize = (index) =>{
    const newTodos = [...todos];
    newTodos[index].iscomplete = !newTodos[index].iscomplete;
    setTodos(newTodos)
  }

  const todoremove = (index) =>{
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <Pplayer>
      <div className="todo-list">
        {todos.map((todo,index)=>(
          <Todo key = {index} index = {index} todo={todo} finalize={finalize} todoremove={todoremove}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </Pplayer>
  )
};

const Pplayer = styled.div`
background-color: lightblue;
height:100vh;
`


export default Player;
