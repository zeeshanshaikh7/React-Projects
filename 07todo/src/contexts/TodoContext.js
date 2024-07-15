import {useContext,createContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo message",
            completed: false
        }
    ],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {},
})


export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider