import React from "react";
import { connect } from "react-redux";
import ToDoItem from "./ToDoItem"

const ToDoList = ({ todos }) => {


  const allTodos = todos.map((todo) => (
    <ToDoItem key={todo.id} {...todo} />
  ));
  return (
  <ul>
    {allTodos}
    </ul>
  )
};


const mapStateToProps = (state) => ({
  todos: state.todos,
});


export default connect(mapStateToProps)(ToDoList);

