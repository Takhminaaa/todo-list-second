import React from "react";
import { InputForm } from "./input/InputForm";
import Button from "./button/Button";
import "./TodoForm.css";

const TodoForm = ({ handleSubmit, value, handleChangeInput }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <InputForm
        
          value={value}
          type="text"
          placeholder="Enter new todo..."
          onChange={handleChangeInput}
        />

        <Button type="submit">ADD</Button>
      </div>
    </form>
  );
};

export default TodoForm;
