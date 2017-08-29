import React, { Component } from 'react';
import shortId from 'shortid';
import TodoInsert from './components/TodoInsert';
import TodoItemList from './components/TodoItemList';
import TodoReset from './components/TodoReset';

function createItem(name) {
  return {
    id: shortId.generate(),
    name,
    finished: false
  }
}

const defaultTodos = [
  '리액트 시작하기',
  '컴포넌트 이해하기',
  'props/state 사용하기',
  'LifeCycle API'
].map(createItem);

class App extends Component {
  state = {
    todoItems: defaultTodos
  }

  constructor(prop) {
    super(prop);
    const todos = localStorage.getItem('todos');
    if (todos) {
      this.state = {
        todoItems: JSON.parse(todos)
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('todos', JSON.stringify(this.state.todoItems));
  }
  
  handleInsert = (name) => {
    this.setState({
      todoItems: [...this.state.todoItems, createItem(name)]
    });
  }

  handleToggle = (id) => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex(item => item.id === id);
    const item = todoItems[index];

    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        {
          ...item,
          finished: !item.finished
        },
        ...todoItems.slice(index + 1, todoItems.length)
      ]
    });
  }

  handleRemove = (id) => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex(item => item.id === id);

    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1, todoItems.length)
      ]
    });
  }

  handleReset = () => {
    this.setState({
      todoItems: defaultTodos
    });
  }

  render() {
    const { 
      handleInsert,
      handleRemove,
      handleToggle,
      handleReset 
    } = this;
    
    const { todoItems } = this.state;

    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <TodoReset onReset={handleReset} />
        <TodoInsert onInsert={handleInsert} />
        <TodoItemList 
          items={todoItems}
          onToggle={handleToggle}
          onRemove={handleRemove} />
      </div>
    );
  }
}

export default App;
