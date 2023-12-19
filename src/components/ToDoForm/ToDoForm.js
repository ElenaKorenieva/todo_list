import React, { Component } from 'react';
import s from './ToDoForm.module.scss';

class ToDoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };

    this.handleChange = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      const newTodo = {
        ...this.state,
        id: Math.floor(Math.random() * 10000),
      };
      this.props.addTodo(newTodo);
      this.resetForm();
    };

    this.resetForm = () => {
      this.setState({ title: '', description: '' });
    };
  }
  render() {
    const { title, description } = this.state;
    return (
      <div className={s.formContainer}>
        <h3 className={s.formTitle}>New task:</h3>
        <form onSubmit={this.handleSubmit} className={s.toDoForm}>
          <input
            className={s.taskTitle}
            name="title"
            type="text"
            placeholder="Your task"
            onChange={this.handleChange}
            value={title}
          />
          <input
            className={s.description}
            name="description"
            type="text"
            placeholder="Describe it"
            onChange={this.handleChange}
            value={description}
          />
          <button type="submit" className={s.submitButton}>
            Add
          </button>
          <h4>{this.state.search}</h4>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
