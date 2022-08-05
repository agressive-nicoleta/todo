import moment from "moment";

class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = moment(new Date()).format("YYYY-MM-DD HH:MM:SS");
  }
}

export default Todo;
