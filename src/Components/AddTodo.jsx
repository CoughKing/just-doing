import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import  {addTodo}  from '../feature/todoSlice'

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
        className = "bg-white flex justify-center items-center space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-600 rounded-xl px-3 py-2 border border-gray-800 text-white"
                placeholder="Enter a Todo ..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
            <button
                type="submit"
                className="ml-3 bg-black text-white rounded-2xl px-6 py-2 hover:bg-gray-500 ">
                    Add Todo
            </button>    
        </form>
  )
}

export default AddTodo