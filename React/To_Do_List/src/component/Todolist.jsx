import React, { useState } from 'react'
import TodoCard from './Todocard';
import AddTodoModal from './AddTodoModal';


const Todolist = () => {
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
     const [search, setSearch] = useState("");

     const handleAdd = () => {
        setEditingTask(null);
        setShowModal(true);
     }

     const handleSubmit = (taskData) => {
        if (editingTask) {
            setTasks(
                tasks.map((tasks)=>
                tasks.id === editingTask.id
              ?{ ...taskData, id: editingTask.id}
              :tasks
              )
            );
        }else{
            const newTasks = {
                id: Date.now(),
                ...taskData
            };
             setTasks([...tasks, newTasks]);
    }

    setShowModal(false);
    setEditingTask(null);
  };

  // Delete task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit task
  const handleEdit = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  // Search
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

        
 return (
    <div className="todo-container">

      <h1>TODO LIST</h1>

      <div className="top-bar">

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleAdd}>
          Add
        </button>

      </div>

      <div className="card-container">

        {filteredTasks.length === 0 ? (
          <h3>No Tasks Found</h3>
        ) : (
          filteredTasks.map((task) => (
            <TodoCard
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}

      </div>

      {showModal && (
        <AddTodoModal
          onClose={() => {
            setShowModal(false);
            setEditingTask(null);
          }}
          onSubmit={handleSubmit}
          editingTask={editingTask}
        />
      )}
    </div>
  );
}

export default Todolist
