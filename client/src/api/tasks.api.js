import axios  from 'axios';



export const getTasksRequest = async()=>{
    const response = await axios.get('http://localhost:4000/tasks');
    return response.data;
}
  



export const createTaskRequest = async (task)=>
    await axios.post('http://localhost:4000/tasks', task)


export const deletTaskRequest = async(id)=>{
    await axios.delete(`http://localhost:4000/tasks/${id}`);
    
}

export const getTaskRequest = async (id)=>{
    const response = await axios.get(`http://localhost:4000/tasks/${id}`)
    return response.data;
}

export const updateTaskRequest =async (id, newFields)=> {
    await axios.put(`http://localhost:4000/tasks/${id}`, newFields);
}

export const toggleTaskDoneRequest= async (id, done)=>{
    await axios.put(`http://localhost:4000/tasks/${id}`,{
        done,
    });
}