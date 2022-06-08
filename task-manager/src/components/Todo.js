import React from 'react';

const Todo = (props) => {

    const { tasks, handleComplete, handleRemove } = props

    return (
    <ul className='todo'>
    <br />
            <h3>To-Do</h3>
            <hr />
            {tasks
                .map((task, index) =>
                <li key={index}>
                        <div className='checkAndTask'>
                            <label className='checkContainer'>
                                <input type="checkbox" onClick={() => handleComplete(index)} />
                                <span className="checkmark"></span>
                            </label>
                            <span>{task.task}</span>
                        </div>
                        <button onClick={() => handleRemove(index)}><i className="fa-solid fa-trash-can"></i></button>
                    </li>
            )}
            <h3>Completed</h3>
            <hr />
    </ul>
    );
}

export default Todo;