import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello world",
      newTodo: "",
      todos: [
        {
          title: "Learn react",
          done: false
        },
        {
          title: "Learn JSX",
          done: false
        },
        {
          title: "Help Inna learn react",
          done: false
        },
        {
          title: "Eat Dinner",
          done: false
        }
      ]
    };
  }

  formSubmitted(event) {
    event.preventDefault();



    this.setState({
      newTodo: '',
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; //copy the array
    todos[index] = {...todos[index], // copy the todo
    done: event.target.checked} // update done property on copied todo
    this.setState({
      todos
    });
  
    
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1); //pull out specific index

    this.setState({
      todos //update the todos array to be the same array, except for
            //the one we spliced
    })
  }



  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title, 
        done: true                     
      };
    });

    this.setState({
      todos
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Our Todo App!</h1>
        <h2>{this.state.message}</h2>
        <form onSubmit={event => this.formSubmitted(event)}>
          <label htmlFor="newTodo" />
          <input
            onChange={event => this.newTodoChanged(event)}
            id="newTodo"
            name="newTodo"
            value={this.state.newTodo}
          />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={() => this.allDone()}>All done</button>

        <ul>
          {this.state.todos.map((todo, index) => {
            return (<li key={todo.title}>
              <input 
              onChange = {(event) => this.toggleTodoDone(event, index)}
              type="checkbox" 
              checked = {todo.done}
              />
              <span style = {{
                textDecoration: todo.done ? 'line-through' : 'inherit'
              }}>{todo.title}</span>
              <button
              onClick={() => this.removeTodo(index)}
              >
              Remove
              </button>
              </li>)
          })}
        </ul>
      </div>
    );
  }
}

export default App;
