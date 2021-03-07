import React from 'react';
import useTodo from '../hooks/useTodo';
import TodoItem from './TodoListItem';

function TodoList() {
  const { todos, onToggle, onRemove } = useTodo();
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default TodoList;
