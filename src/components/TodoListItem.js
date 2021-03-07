import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdLoop,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
import useTodo from '../hooks/useTodo';

function TodoListItem({ todo, onToggle, onRemove }) {
  const { input, onChangeInput, onUpdate } = useTodo();
  const { id, done, text } = todo;

  const onClick = () => {
    onUpdate(todo.id, input);
    onChangeInput('');
  };

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { done })} onClick={() => onToggle(id)}>
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <button className="remove" onClick={() => onRemove(todo.id)}>
        <MdRemoveCircleOutline />
      </button>
      <button className="update" onClick={onClick}>
        <MdLoop />
      </button>
    </div>
  );
}

export default TodoListItem;
