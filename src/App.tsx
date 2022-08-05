import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Do News App"), new Todo("Do smth")];

  return (
    <div>
      <h1>ToDo App</h1>
      <Todos items={todos} />
    </div>
  );
}

export default App;
