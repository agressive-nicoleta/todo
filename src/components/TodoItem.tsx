const TodoItem: React.FC<{ text: string; id: string }> = (props) => {
  return (
    <li>
      {props.text}. DateID: {props.id}
    </li>
  );
};

export default TodoItem;
