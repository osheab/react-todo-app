//type rfce 
import React, {useState, useEffect, useRef} from 'react'


function TodoForm(props) {
    const [input, setInput]= useState(props.edit ? props.edit.value : '');


    const inputRef = useRef(null)
//useRef takes one arg as init value and returns a reference.
    useEffect(() => {
        inputRef.current.focus()
    });
//useEffect performs arbitrary side effects during the life of a component.
    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()* 10000),
            text: input
        });
         setInput(''); //emptys the input after pressing button
    }; 

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
            <input type='text' 
            placeholder='Update a todo' 
            value={input}
            name='text' 
            className='todo-input edit'
            onChange={handleChange}
            ref={inputRef} 
            />
            <button onClike={handleSubmit} className='todo-button'>Update</button>
            </>
            ) : (
                <>
            <input 
            placeholder= 'Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>
            Add Todo
            </button>
            
            </>
            )}
        </form>
    );
}

export default TodoForm

