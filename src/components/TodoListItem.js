import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

function TodoListItem({ todo, onToggle, onRemove }) {
  const { id, done, text } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { done })} onClick={() => onToggle(id)}>
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <button className="remove" onClick={() => onRemove(todo.id)}>
        <MdRemoveCircleOutline />
      </button>
    </div>
  );
}

export default TodoListItem;
