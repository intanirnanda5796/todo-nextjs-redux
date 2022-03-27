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
      const todo = {
        id: Math.max(0, Math.max(...state.data.map((newTodo) => newTodo.id))) + 1,
        title,
        complete: false,
      };

      const addTodo = [...state.data, todo];

      return {data: addTodo};
    case COMPLETE_TODO:
      const completeTodo = state.data.map((newTodo) => {
        if (newTodo.id === action.payload) {
          return {
            id: newTodo.id,
            title: newTodo.title,
            complete: true,
          };
        }

        return newTodo;
      });

      return { data: completeTodo };
    case UNCOMPLETE_TODO:
      const uncompleteTodo = state.data.map((newTodo) => {
        if (newTodo.id === action.payload) {
          return {
            id: newTodo.id,
            title: newTodo.title,
            complete: false,
          };
        }
        return newTodo;
      });

      return { data: uncompleteTodo };
    case DELETE_TODO:
      const deleteTodo = state.data.filter(
        (newTodo) => newTodo.id !== action.payload
      );
      return { data: deleteTodo };
    default:
        return state;
  }
};

export default rootReducer;
