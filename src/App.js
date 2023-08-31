import { useState } from 'react';      
import AddTaskForm from './Components/AddTaskForm.jsx';
import UpdateForm from './Components/UpdateForm.jsx';
import ToDo from './Components/ToDo.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'; //import bootstrap from node modules

import './App.css';

function App() {

  //Tasks (ToDo list) State 
  const [toDo, setToDo] = useState([]);    //initialised with array const[value, function]=hook

  // Temporary State
  const [newTask, setNewTask] = useState(''); //newTask will be used to hold temp data that will be added as new task in task list
  const [updateData, setUpdateData] = useState(''); //will hold the task that is being updated  //initialised with string

  //function to add task
  const addTask = () => {
    if (newTask) {   //since data is stored in newTask we are checking if it exists
      let num = toDo.length + 1; //assigning id to new task
      let newEntry = { id: num, title: newTask, status: false } //initial status will be false
      setToDo([...toDo, newEntry])
      setNewTask('');  //empty after inserting into to-do list
    }
  }

  //Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id) //filtered out the id we received
    setToDo(newTasks); //updated to do list 
  }

  //Mark tasks as completed
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status }) //toggle task status if true then false and vice versa
      }
      return task;
    })
    setToDo(newTask); //update ToDo list
  }

  //cancel update
  const cancelUpdate = () => {
    setUpdateData('');
  }

  //change task for update (enables us to update in input box)
  const changeTask = (e) => {   //get the value from event
    let newEntry = {
      id: updateData.id,        //id and state will remain same only title will be changed
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  //update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id); //filter orignal ToDo and remove the id
    let updatedObject = [...filterRecords, updateData]                       //replacing with updated data
    setToDo(updatedObject);
    setUpdateData('');                                                       //emptying UpdateData for more entries
  }

  return (
    //container class from bootstrap
    <div className="container App">

      <br></br>
      <h2>HONO: To-Do List</h2>  {/*app title*/}
      <br></br>

      {/*Update Task*/}
      { updateData ? (  //toggle between add and update column instead of having both input fields visible
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />

      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/*Display ToDos */}
      {toDo && toDo.length ? '' : 'No Tasks Present'}  {/*if list is empty then*/}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />


    </div>
  );
}

export default App;
