import { React, useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: "May 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: "May 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: "May 5th at 2:30pm",
      reminder: false,
    }
  ])

  const [showAddTask, setShowAddTask] = useState(false);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="App">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      <div className="container">
        {showAddTask && <AddTask
          onAdd={addTask}
        />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          'You have no tasks. Great job!'
        )}
      </div>
      <Footer />
    </div>
  )
}

export default App;
