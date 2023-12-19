import { Component } from 'react';
import ToDoForm from '../ToDoForm/ToDoForm';
import TodoList from '../ToDoList/ToDoList';

class TodoPage extends Component {
  state = {
    todo: [],
  };

  componentDidMount() {
    const todo = JSON.parse(localStorage.getItem('todo')) || [];

    this.setState({ todo });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todo !== this.state.todo) {
      localStorage.setItem('todo', JSON.stringify(this.state.todo));
    }
  }

  addTodo = newTodo => {
    this.setState(prevState => ({
      todo: [...prevState.todo, newTodo],
    }));
  };

  addTodoList = todo => {
    this.setState(prev => ({
      todo: [...prev.todo, todo],
    }));
  };

  removeTodo = id => {
    this.setState(prev => ({
      todo: prev.todo.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <>
        <ToDoForm addTodo={this.addTodo} addTodoList={this.addTodoList} />
        <TodoList todo={this.state.todo} removeTodo={this.removeTodo} />
      </>
    );
  }
}

export default TodoPage;
