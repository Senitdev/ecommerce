import { useReducer } from "react";
import Addtask from "./Addtask";

export const ExerciceReducer=()=>{
    let nextId=3;
const initialTasks=[
    { id:0,text:'Visite kafka museum', done:true},
    { id:1, text:'Whatch a purple show',done:false},
    {id:2, text:'Lennon Wall pic',done:false}
];
    const[task,dispatcher]=useReducer(
        tasksReducer,
        initialTasks
    );
    
    function HandleAddTaks(text){
  dispatcher({
    type:'added',
    id:nextId++,
    text:text,
  });
    }
    function handleDeleteTasks(taskId){
     dispatcher({
        type:'deleted',
        id:taskId
     });
    }
return<>
<h1>Prag itinerary</h1>
<Addtask  addTask={HandleAddTaks}></Addtask>
</>
function tasksReducer(tasks,action){
    switch(action.type){
        case 'added':{
            return[...tasks,{
                id:action.id,
                text:action.text,
                done:false,
            }];
        }
        case 'changed':{
            return tasks.map(t=>{
                if(t.id===action.task.id){
                    return action.task;
                }else{
                    return t;
                }
            });
        }
        case 'deleted':{
           return tasks.filter(t=>t.id!==action.id)
        }
        default:{
            throw Error ('Unknown action'+action.type);
        }
    }

}

}