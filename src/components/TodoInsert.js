import React from 'react';
import useTodo from '../hooks/useTodo';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

function TodoInsert() {
  const { input, onChangeInput, onInsert } = useTodo();

  const onChange = e => {
    onChangeInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={input}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
