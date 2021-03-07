const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
const UPDATE = 'todos/UPDATE';

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input,
});

let id = 4;
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = id => ({
  type: TOGGLE,
  id,
});

export const remove = id => ({
  type: REMOVE,
  id,
});

export const update = (id, text) => ({
  type: UPDATE,
  id,
  text,
});

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'redux',
      done: true,
    },
    {
      id: 2,
      text: 'react',
      done: false,
    },
    {
      id: 3,
      text: 'js',
      done: false,
    },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    case UPDATE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, text: action.text, done: false }
            : todo
        ),
      };
    default:
      return state;
  }
}

export default todos;
