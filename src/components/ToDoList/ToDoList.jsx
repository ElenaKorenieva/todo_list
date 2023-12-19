import TodoItem from '../ToDoItem/ToDoItem';
import s from './ToDoList.module.scss';

const TodoList = ({ todo = [], removeTodo }) => {
  return (
    <>
      <h3 className={s.listTitle}>My todo list:</h3>
      <ul className={s.cardsList}>
        {todo.map(el => (
          <TodoItem key={el.id} {...el} removeTodo={removeTodo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
