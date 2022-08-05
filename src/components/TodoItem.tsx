import classes from "./ToDoItem.module.css";

const TodoItem: React.FC<{ text: string; id: string }> = (props) => {
  return (
    <li className={classes.item}>
      {props.text}. DateID: {props.id}
    </li>
  );
};

export default TodoItem;
