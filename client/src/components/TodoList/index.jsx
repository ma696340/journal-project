/* import React from "react";
import Todo from "./Todo";



export default class CalendarList extends React.Component {

    state = {
        todos: [],
        todoToShow: "all"
    }

    addToDo = (todo) => {


        this.setState({
            todos: [todo, ...this.state.todos]

        })

    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        complete: !todo.complete

                    };

                } else {
                    return (todo);
                }
            })
        });


        updateTodoToShow = (s) => {
            this.setState({
                todoToShow: s
            })

        }

    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })


    }


    render() {

        let todos = [];

        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        }
        else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        }
        else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);

            return (
                <div>
                    <ToDoForm onSubmit={this.addToDo} />
                    {todos.map(todo => (
                        <Todo
                            key={todo.id}
                            toggleComplete={() => this.toggleComplete(todo.id)}
                            onDelete={() => this.handleDeleteTodo(todo.id)}
                            todo={todo} />
                    ))}
                    <div>ToDo's Left: {this.state.todos.filter(todo => !todo.complete).length}
                    </div>

                    <div>
                        <button onClick={() => this.updateTodoToShow("all")}>All</button>
                        <button onClick={() => this.updateTodoToShow("active")}>Active</button>
                        <button onClick={() => this.updateTodoToShow("complete")}>Complete</button>
                    </div>

                </div>

            )
        }

    }} */