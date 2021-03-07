import React from 'react';

function TodoTemplate({ children }) {
  return (
    <div>
      <div>일정관리</div>
      <div>{children}</div>
    </div>
  );
}

export default TodoTemplate;
