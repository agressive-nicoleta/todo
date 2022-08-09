import classes from "./NewTodo.module.css";
import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputText = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputText.current!.value;
    if (enteredText?.trim().length === 0) {
      //throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input type="text" id="text" placeholder="Write here..." />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
