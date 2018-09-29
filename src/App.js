import React, { Component } from "react";
import "./App.css";
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Let's get shit done!",
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
       
        <NewTodoForm 
        newTodo = {this.state.newTodo}  //these are props!
        newTodoChanged = {this.newTodoChanged.bind(this)}
        formSubmitted = {this.formSubmitted.bind(this)}
        />

        <button onClick={() => this.allDone()}>All done</button>

        <TodoList 
        todos = {this.state.todos}
        toggleTodoDone={this.toggleTodoDone.bind(this)}
        removeTodo = {this.removeTodo.bind(this)}
        />

      </div>
    );
  }
}

export default App;
