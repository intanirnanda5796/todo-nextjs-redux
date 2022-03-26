import {
  ADD_TODO,
  COMPLETE_TODO,
  UNCOMPLETE_TODO,
  DELETE_TODO,
} from "../types";

const addTodo = (newTodo) => ({
    type: ADD_TODO,
    payload: newTodo
})

const completeTodo = (todoId) => ({
    type: COMPLETE_TODO,
    payload: todoId
})

const uncompleteTodo = (todoId) => ({
    type: UNCOMPLETE_TODO,
    payload: todoId
})

const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId
})

export { addTodo, completeTodo, uncompleteTodo, deleteTodo };