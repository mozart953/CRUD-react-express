import { createContext, useContext, useState } from 'react';
import {getTasksRequest, deletTaskRequest} from '../api/tasks.api.js'



export const TaskContext = createContext();

export const useTasks = ()=>{
    const context = useContext(TaskContext)
    if(!context){
        throw new Error("useTasks must be used within a TaskContextProvider")

    }
    return context;
}

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    async function loadTasks() {
        const response = await getTasksRequest();
        setTasks(response);
     }

     const deleteTask = async (id) => {
        try {
            const response = await deletTaskRequest(id);
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    };


    
    
    return (
        <TaskContext.Provider value={{ tasks, loadTasks,deleteTask}}>
            {children}
        </TaskContext.Provider>
    );
}
