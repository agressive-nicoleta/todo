import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const todos = [new Todo("Do News App"), new Todo("Do smth")];

  const addTodoHandler = (text: String) => {};

  return (
    <div>
      <h1>ToDo App</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
