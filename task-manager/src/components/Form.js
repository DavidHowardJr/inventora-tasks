import React from 'react';

const Form = (props) => {

    const {formInput, handleChange, handleSubmit} = props

    return (
        <form className='formInput' onSubmit={handleSubmit}>
            <label htmlFor="taskInput"></label>
            <input required type="text" value={formInput} onChange={handleChange}/>
            <button className="btn-add" type="submit" alt="Add task"><i className="fa-solid fa-plus fa-1x">Add Task</i></button>
        </form>
    );
}

export default Form;
