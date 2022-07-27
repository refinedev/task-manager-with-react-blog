import React from 'react'


const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();

        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.floor(Math.random() * 10000)}
        ])

        setInputText('');

        console.log(inputText);

    }

    const statusHandler = (e) => {
        setStatus(e.target.value)

        console.log(e.target.value)
    }

    return (
        <section>
            <form className='form-div'>
        <div>
                <input type='text' placeholder='Enter New Task Here' value={inputText} className='input' onChange={inputTextHandler}  />
                <button onClick={submitTodoHandler} className='add-button'> Add Task</button>
                <select onChange={statusHandler}>
                <option>All</option>
                <option>Completed</option>
                <option>Uncompleted</option>
            </select>   
        </div>
        </form>
        </section>
    )
}

export default Form
