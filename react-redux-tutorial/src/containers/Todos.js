import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';

import TodoItem from '../components/TodoItem';

const Todos = () => {
  const { input, todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onChangeInput = useCallback(
    input => {
      dispatch(changeInput(input));
    },
    [dispatch],
  );

  const onInsert = useCallback(
    text => {
      dispatch(insert(text));
    },
    [dispatch],
  );
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onToggle = useCallback(
    id => () => {
      dispatch(toggle(id));
    },
    [dispatch],
  );

  const onRemove = useCallback(
    id => () => {
      dispatch(remove(id));
    },
    [dispatch],
  );
  const onChange = e => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
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
    </div>
  );
};

export default Todos;
