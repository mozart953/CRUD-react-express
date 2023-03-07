import { useEffect} from 'react'
import TaskCard from '../components/TaskCard.jsx'
import {useTasks} from '../context/TaskContext'


function TasksPage() {
   const {tasks,loadTasks} = useTasks();

   useEffect(() => {

   
      loadTasks();

   }, [])

   function renderMain() {
      if (tasks.length===0){
         return <p>No tasks yet</p>

      }


      return tasks.map(task => (
         <TaskCard task={task} key={task.id} />

      ))


   }

   return (
      <div>

         <h1>
            Tasks
            {renderMain()}
         </h1>



      </div>

   )


}

export default TasksPage