import React, { useReducer, useState } from 'react'
import TodoInput from './TodoInput';
import TodoTasks from './TodoTasks';
import './home.css';
import ProfilePicture from './ProfilePicture';

function greetingOfTheDay(){

 let date=new Date();


 let current_hour_time=date.getHours();
 

 let afternoon_start=12;
 let evening_start=16;
 let night_start=20;

 console.log(current_hour_time,afternoon_start);

 if(current_hour_time<afternoon_start){
   return 'Good Morning';

 }
 else if(current_hour_time>=afternoon_start && current_hour_time<evening_start){
   return 'Good Afternoon';
 }
 else if(current_hour_time>=evening_start && current_hour_time<night_start){
   return 'Good Evening';
 }
 else if(current_hour_time>=night_start){
   return 'Good Night';
 }
 else{
   return 'Have a great day!';
 }


}




function Home({user:{user},signOut}) {


  const [edit_todo,setEditTodo]=useState(()=>null);

  
  function editTodo(edit_todo){

   setEditTodo(edit_todo);
  }


  return (
    <div style={{padding:'20px'}}>
        <div className="banner-section">
        <div className="profile-picture">
        <ProfilePicture user_id={user.uid} user_name={user.displayName}/>
        </div>
        <div className="greeting-message">
        <h4>Hi {user.email}, {greetingOfTheDay()}</h4>
        <button onClick={signOut}>Logout</button>
        </div>
        </div>
        <hr/>
        <div className="todo-container">
        <TodoInput edit_todo={edit_todo} setEditTodo={setEditTodo}/>   
        <TodoTasks uid={user?.uid} editTodo={editTodo}/> 
        </div>
    </div>
  )
}

export default Home