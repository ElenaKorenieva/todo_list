import { PureComponent } from 'react';
import s from './ToDoItem.module.scss';

class TodoItem extends PureComponent {
  render() {
    const { id, title, description, removeTodo } = this.props;

    return (
      <li key={id} className={s.card}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={e => removeTodo(id)} className={s.cardBtn}>
          Done
        </button>
      </li>
    );
  }
}

export default TodoItem;
