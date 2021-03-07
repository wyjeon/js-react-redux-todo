import React from 'react';
import useTodo from '../hooks/useTodo';

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
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default TodoInsert;
