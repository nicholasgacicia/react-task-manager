import { React, useState } from 'react';
import Header from './components/universal-comps/Header';
import Tasks from './components/Tasks';
import AddTask from './components/NewTaskForm';
import Footer from './components/universal-comps/Footer';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: `Doctor's Appointment`,
      datetime: "2021-05-24T14:00",
      reminder: true,
    },
    {
      id: 2,
      title: 'Meeting at School',
      datetime: "2021-05-22T17:30",
      reminder: true,
    },
    {
      id: 3,
      title: 'Food Shopping',
      datetime: "2021-05-218T11:30",
      reminder: false,
    }
  ])

  const [showAddTask, setShowAddTask] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  // Add Task
  const handleSubmit = (task) => {
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
      <main>
        <div className="container">
          {showAddTask && <AddTask
            onAdd={handleSubmit}
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
        <span>
          <button
            className="btn btn-primary"
            onClick={this.openModal}
          >Add Task</button>

          {this.state.isOpen ?
            <ModalForm
              closeModal={this.closeModal}
              isOpen={this.state.isOpen}
              handleSubmit={this.handleSubmit}
            />
            :
            null
          }
        </span>
      </main>
      <Footer />
    </div>
  )
}

export default App;
