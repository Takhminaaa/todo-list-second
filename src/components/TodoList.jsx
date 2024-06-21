import TodoListItem from "./TodoListItem";

const TodoList = ({ handleDaleteValue, handleUpdate, todos }) => {
  return (
    <ul className="ul">
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          {...item}
          handleDaleteValue={handleDaleteValue}
          handleUpdate={handleUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
