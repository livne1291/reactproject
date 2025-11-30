import React, { useEffect, useRef, useState } from 'react'
import todoicon from '../todolist2 asset/todo_icon.png'
import Todoitem from './Todoitem';

const Todo = () => {
   const [todolist,settodolist] = useState([])

   const inputref = useRef();


const add = () => {
    const inputvalue = inputref.current.value;

    if(inputvalue === ''){
        return null;
    }
    const newtodo = {
        id: Date.now(),
        text:inputvalue,
        completed: false,

    }
    settodolist((prev)=> [...prev,newtodo])
    inputref.current.value = ''
}

    const  handledelete = (id) =>{
    
     settodolist((prevtodo)=> { return prevtodo.filter(prv => prv.id !== id)})
    }

    const togglecomplete = (id) => {
     settodolist(todolist.map(
        todo => todo.id == id ? {...todo,completed:!todo.completed}:todo
     ))
    }



function keyadd(e){
    if(e.key === 'Enter'){
        e.preventDefault()
        add()
    }
}

  return (
   <>
   <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        <div className='flex item-center mt-7 gap-2'>

             <img className='w-8' src={todoicon} alt="" />
            <h1 className='text-xl font-semibold'>to-do-list</h1>
        </div>

        <div className='flex item-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputref} onKeyDown={ keyadd} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2' type="text" placeholder='add your task' />
            <button onClick={()=> add()} className='border-none rounded-full
             bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>add</button>
        </div>
         
         
     {todolist.map((todo)=> {
        return <Todoitem key={todo.id} text={todo.text}
         ondelete={handledelete} id={todo.id} iscompleted = {todo.completed}  oncomplete={togglecomplete}/>
     } )}
    

      <div>
     
      </div>
   </div>
   </>
  )
}

export default Todo
