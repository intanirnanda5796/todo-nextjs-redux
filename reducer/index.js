import {
  ADD_TODO,
  COMPLETE_TODO,
  UNCOMPLETE_TODO,
  DELETE_TODO,
} from "../types";

const initialState = {
  data: [
    { id: 1, title: "belajar redux 1", complete: true },
    { id: 2, title: "belajar redux 2", complete: false },
    { id: 3, title: "belajar redux 3", complete: false },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { title } = action.payload;
      const ids = state.map((newTodo) => newTodo.id);
      const newId = Math.max(...ids) + 1;
      const todo = {
        id: newId,
        title,
        complete: false,
      };

      const addTodo = [...state, todo];

      return addTodo;
    case COMPLETE_TODO:
      const completeTodo = state.map((newTodo) => {
        if (newTodo.id === action.payload) {
          return {
            id: newTodo.id,
            title: newTodo.title,
            complete: true,
          };
        }

        return newTodo;
      });

      return completeTodo;
    case UNCOMPLETE_TODO:
      const uncompleteTodo = state.map((newTodo) => {
        if (newTodo.id === action.payload) {
          return {
            id: newTodo.id,
            title: newTodo.title,
            complete: false,
          };
        }

        return newTodo;
      });

      return uncompleteTodo;
    case DELETE_TODO:
      const deleteTodo = state.filter(
        (newTodo) => newTodo.id !== action.payload
      );
      return deleteTodo;
    default:
        return state;
  }
};

export default rootReducer;
