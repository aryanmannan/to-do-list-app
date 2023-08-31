import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleCheck, faPen, faTrashCan                                  // to mark task as completed, edit and delete
} from '@fortawesome/free-solid-svg-icons'


const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
    return (
        <>
            {toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1)                //ensures that the tasks are displayed in order that is task 2 over task 1 doesnt happen
                .map((task, index) => {
                    return (
                        <React.Fragment key={task.id}>
                            <div className="col taskBg">
                                <div className={task.status ? 'done' : ''}> {/*if task status done then display else */}
                                    <span className="taskNumber">{index + 1}</
                                    span>
                                    <span className="taskText">{task.title}</
                                    span>
                                </div>
                                <div className="iconsWrap">
                                    <span title='Completed / Not Completed'
                                        onClick={(e) => markDone(task.id)}
                                    > {/*displayed when cursor hovers over it*/}
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>

                                    {task.status ? null : (          //if task status is true then don't show edit icon else show

                                        <span title='Edit'
                                            onClick={() => setUpdateData({
                                                id: task.id,
                                                title: task.title,
                                                status: task.status ? true : false
                                            })}>
                                            <FontAwesomeIcon icon={faPen} />
                                        </span>
                                    )}
                                    <span title='Delete/Remove'
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </span>


                                </div>

                            </div>


                        </React.Fragment>
                    )
                })
            }

        </>

    )
}

export default ToDo;