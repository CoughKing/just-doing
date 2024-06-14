import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import  addTodo  from '../feature/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form 
        onSubmit={addTodoHandler}
        className = "">
            <input
                type="text"
                className=""
                placeholder="Enter a Todo ..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
            <button
                type="submit"
                className="">
                    Add
            </button>    
        </form>
  )
}

export default AddTodo