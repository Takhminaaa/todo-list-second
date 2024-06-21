import React from "react";
import Button from "./button/Button";

const TodoListItem = ({ id, title, handleDaleteValue, handleUpdate }) => {
  console.log(handleUpdate);
  return (
    <li className="value-input" key={id}>
      {title}

      <div className="checkbox">
        <Button
          backgroundColor={"lime"}
          onClick={() => handleUpdate(id)}
          type="button"
        >
          UPDATE
        </Button>
        <Button onClick={() => handleDaleteValue(id)} backgroundColor={"red"}>
          DELETE
        </Button>
      </div>
    </li>
  );
};

export default TodoListItem;
