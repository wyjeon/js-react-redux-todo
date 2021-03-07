import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, remove, toggle } from '../modules/todos';

function useTodo() {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const dispatch = useDispatch();
  const onChangeInput = useCallback(input => dispatch(changeInput(input)), [
    dispatch,
  ]);
  const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  return {
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
  };
}

export default useTodo;
