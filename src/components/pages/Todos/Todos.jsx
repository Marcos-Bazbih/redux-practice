import "./Todos.css";
import { connect } from "react-redux";
import { AddTodo, RemoveTodo } from "../../../redux/actions/todoActions";
import { useState } from "react";

const Todos = (props) => {
    const [todo, setTodo] = useState({});

    const HandleTodo = (e) => {
        todo.id = props.todos.length;
        todo.text = e.target.value;
        todo.isCompleted = false;
    }

    const AddBtn = () => {
        props.AddTodo(todo);
    }

    const RemoveBtn = (todo) => {
        props.RemoveTodo(todo);
    }

    return (
        <div className="main">
            <h1>Todos - {props.todos.length}</h1>
            <input type="text" placeholder="Add todo" onChange={HandleTodo} />
            <button onClick={AddBtn}>Add Todo</button>

            <section className="todos-container">
                {
                    props.todos.length !== 0 ?
                        (
                            props.todos.map((todo, i) => (
                                <div className="todo-card" key={i}>
                                    <h2>Todo id: {todo.id}</h2>
                                    <h2>Todo title: {todo.title}</h2>
                                    <h2>Is completed: {todo.isCompleted ? "Yes" : 'No'}</h2>
                                    <button className="delete-btn" onClick={() => RemoveBtn(todo)}>X</button>
                                </div>
                            ))
                        )
                        : <h1>"no todos"</h1>
                }
            </section>
        </div>
    )
}

export default connect((state) => ({ todos: state.todos }), { AddTodo, RemoveTodo })(Todos);