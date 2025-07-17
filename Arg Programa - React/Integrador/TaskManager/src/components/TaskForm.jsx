import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./TaskForm.css"
function TaskForm() {

    const [selected, setSelected] = useState(false);
    const [fieldTask, setFieldTask] = useState('');


    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelected(false);
        }
      }

    const createTask = () => {
        let id = createId();
        let data = new Object();
        data.name = fieldTask;
        data.status = false;
        console.log(id, data);
            try {
                localStorage.setItem(String(id), JSON.stringify(data))
                setFieldTask('');
            } catch (e) {
                console.log(e);            
            }
    }

    return (  
        <>
            <button type="button" onClick={() => setSelected(true)}>+</button>
            
            {selected && 
                <div className="backdrop" onClick={handleClick}>
                    <div className="new-task-container">
                        <h3 className="new-task-title">Nueva Tarea</h3>
                        <form className='new-task-form'>
                            <label htmlFor="field-task">Tarea: </label>
                            <input 
                                type = "text" 
                                id = "field-task" 
                                value = {fieldTask} 
                                onChange = {(event) => setFieldTask(event.target.value)} 
                                placeholder = "Ej: Cortar el pasto"/>
                            <br/>
                            <button className='new-task-button' type="submit" onClick={createTask}>Crear</button>
                        </form>
                    </div>
                </div>
            }
        </>
    );
}

function createId(){
    let keys = Object.keys(localStorage).filter((key) => !isNaN(key));
    let id = Math.max(...keys)+1;
    if (isNaN(id) || !isFinite(id)){
        return(1);
    }
    return(id);
}

export {createId}
export default TaskForm;
