import { React, useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
        />
      ) : (
          'You have no tasks. Great job!'
      )}
    </div>
  )
}

export default App;
