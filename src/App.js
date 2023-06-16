import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;

  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  } else {
    initTodo = [];
  }

  const onDelete = (todo) => {
    console.log("I'm on delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I'm adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify([...todos, myTodo]));
  };

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initTodo);
  }, []);

  return (
    <>
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
