import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import "./TaskList.css"

function TaskManager() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      let keys = Object.keys(localStorage);
        let newTasks = keys.map(key => ({ id: key, data: JSON.parse(localStorage.getItem(key)) }));
        setTasks(newTasks);
    }, []);

    const refreshTasks = () => {
        let keys = Object.keys(localStorage);
        let newTasks = keys.map(key => ({ id: key, data: JSON.parse(localStorage.getItem(key)) }));
        setTasks(newTasks);
    };

        return (
            <ul id="listOfTasks" className='list-of-Tasks flex '>
                {tasks.map(task => {
                    let data = loadTask(task.id)
                        return(<li key={task.id}>
                            <TaskItem idTask={task.id} dataTask={data} onUpdate={refreshTasks}/>
                        </li>)
                })}
            </ul>
          );
}

function loadTask(id){
    try {
        return(
            JSON.parse(localStorage.getItem(id))
        )        
    } catch (e) {
        console.log(e)
    }

}

function saveTask(id, data = JSON){
    try {
        localStorage.setItem(String(id), JSON.stringify(data));  
    } catch (e) {
        console.log(e);
    }    
}



export {saveTask, loadTask}
export default TaskManager;
