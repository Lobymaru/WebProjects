import React, {useState} from 'react';
import {saveTask} from './TaskList';
import {createId} from './TaskForm';
import './TaskItem.css'

function TaskItem(props) {

        const [redraw, setRedraw] = useState(false);

        let id=props.idTask;
        let data=props.dataTask;  
        
        const statusHandler = (e) => {
            setRedraw(!redraw);
            data.status=!data.status;
            saveTask(id, data)
        }

        const removeTask = (id) => {
            try {
                localStorage.removeItem(String(id));
                props.onUpdate();
            } catch (e) {
                console.log(e);    
            }
        }

        const duplicateTask = (data = JSON) =>{
            let id = createId();
            data.status = false;
            try{
                localStorage.setItem(String(id), JSON.stringify(data));
                props.onUpdate();
            } catch (e) {
                console.log(e);            
            }
    
        }

        return (
            <div className={`task-container flex flex-v ${data.status ? "completed" : "" }`}>
                <div className="task-wrapper flex flex-h" >
                <h3 className="task-title">{data.name}</h3>
                <input type="checkbox" defaultChecked={data.status} name="task-status" id={"task-status" + id} className='task-status' onClick={(e) => statusHandler(e)} />
            </div><div className="acction-wrapper flex">
                    <button type="button" className='action-btn remove-btn' id="remove-btn" onClick={() => removeTask(id)}>Remover</button>
                    <button type="button" className='action-btn' id="redo-btn" onClick={() => duplicateTask(data)}>Duplicar</button>
                </div>
            </div>
         );
};
 
export default TaskItem;