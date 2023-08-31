const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return (
        <>
            {/*Add New Task (display forms to input new task)*/}
            <div className='row'>
                <div className='col'>
                    <input
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className='form-control form-control-lg'
                    />
                </div>
                <div className='col-auto'>
                    <button
                        onClick={addTask}  //task should be added on clicking this button
                        className='btn btn-lg btn-success'
                    >Add Task</button> {/*displays what to show in button*/}

                </div>
            </div>
            <br />

        </>



    )
}

export default AddTaskForm;