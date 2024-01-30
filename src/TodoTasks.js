import React,{useEffect,useState} from 'react';
import {database} from './firebaseConfig';
import {ref,onValue,remove} from 'firebase/database';
import { FaTrash,FaPen,FaStopwatch} from 'react-icons/fa';
import EventModal from './EventModal';


function TodoTasks({uid,editTodo}) {

const [todos,setTodos]=useState([]);   
const [show_event_counter,setShowEventCounter]=useState(false);
const [event_counter_date,setEventCounterDate]=useState(null); 
const [title,setEventTitle]=useState(null); 

useEffect(()=>{

    const todo_ref=ref(database,'todo/');

    onValue(todo_ref,snapshot=>{

        const data=snapshot.val();
        let todos=[];

        for(let key in data){
            
            let val=data[key];
            todos.push({
                ...val,
                todo_id:key
            })
        }

        todos=todos.filter(todo=>todo.uid===uid);
        


        setTodos(todos)

    });


},[uid]);

 function deleteStuff(id){
    const todo_ref=ref(database,'todo/'+id);
    remove(todo_ref);
    
    let filter_todos=todos.filter(todo=>todo.todo_id!==id);
    setTodos(filter_todos);

}

function showRemainingTimes(event_date,title){
setShowEventCounter(true);
setEventCounterDate(event_date);
setEventTitle(title);
}


  return (
    <div style={{width:'50%',maxWidth:'300px'}}>
        {
            todos.length>0 ? (
                todos.map(todo=>(
                 <details key={todo.todo_id} style={{margin:'10px 0'}}>
                 <span style={{fontSize:'0.9rem'}}><i>Scheduled For {new Date(todo.stuff_on).toLocaleDateString()}</i></span>
                  <summary>{todo.title}</summary>
                  <p>{todo.description}</p>
                  <div>
                      <button onClick={()=>deleteStuff(todo.todo_id)}  ><FaTrash/> Delete</button>&nbsp;&nbsp;
                      <button  value={todo.todo_id} onClick={()=>editTodo({...todo})}><FaPen/> Edit</button>&nbsp;&nbsp;
                      <button onClick={()=>showRemainingTimes(todo.stuff_on,todo.title)}><FaStopwatch/>Remaining Times</button>
                  </div>
                 
                 </details>
                ))):(
                    <p>Empty bucket</p>
                )
            
        }
        {
            show_event_counter===true ? <EventModal event_date={event_counter_date} setShowEventCounter={setShowEventCounter} title={title} />:''
        }
      
    </div>
  )
}

export default TodoTasks