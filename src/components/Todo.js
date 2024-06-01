import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";

const Todo = ({ text, updateMode, deleteTodo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <LiaEditSolid className="icon" onClick={updateMode} />
        <RxCross1 className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default Todo;
