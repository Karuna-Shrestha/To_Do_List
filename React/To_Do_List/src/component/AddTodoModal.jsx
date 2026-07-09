import React, { useEffect, useState } from "react";

function AddTodoModal({ onClose, onSubmit, editingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  // Fill the form when editing
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    } else {
      setTitle("");
      setDescription("");
      setPriority("Low");
    }
  }, [editingTask]);

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill all fields.");
      return;
    }

    onSubmit({
      title,
      description,
      priority,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>
          {editingTask ? "Edit Task" : "Add Task"}
        </h2>

        <form onSubmit={handleSubmit}>

          <label>Title</label>

          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description</label>

          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label>Priority</label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <div className="modal-buttons">

            <button type="submit" className="submit-btn">
              {editingTask ? "Update" : "Submit"}
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddTodoModal;