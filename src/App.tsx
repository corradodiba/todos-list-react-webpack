import React, { Fragment, useState, FormEvent } from "react";
import { render } from "react-dom";

type FormElement = FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  isComplete: boolean;
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (event: FormElement): void => {
    event.preventDefault();
    addTodos(value);
    setValue("");
  };

  const addTodos = (text: string): void => {
    const newTodo: ITodo[] = [
      ...todos,
      {
        text,
        isComplete: false
      }
    ];
    setTodos(newTodo);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const changeStatusTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].isComplete = !todos[index].isComplete;
    setTodos(newTodos);
  };

  const getTodosText = (): JSX.Element[] => {
    return todos.map((todo: ITodo, index: number) => (
      <Fragment key={index}>
        <p style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
          {todo.text}
        </p>
        <button type="button" onClick={() => changeStatusTodo(index)}>
          Change to {todo.isComplete ? "Incomplete" : "Complete"}
        </button>
        <button type="button" onClick={() => removeTodo(index)}>
          Remove
        </button>
      </Fragment>
    ));
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <h4>Todo List</h4>
        <input
          type="text"
          name=""
          id=""
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
        />
        <button type="submit">Add</button>
        <hr />
        <section>{getTodosText()}</section>
      </form>
    </Fragment>
  );
}

const root = document.getElementById("app-root");

render(<App />, root);
