import React from "react";

function TodoCard({ task, onEdit, onDelete }) {
  return (
    <div className="todo-card">

      <h2>{task.title}</h2>

      <p>{task.description}</p>

      <h4>Priority: {task.priority}</h4>

      <div className="card-buttons">
        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default TodoCard;