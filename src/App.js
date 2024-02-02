import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid'
import "./css/style.css"

function App() {
  const [list, setList] = useState([
    {
      id: 0,
      isDone: false,
      task: 'Do something today'
    },
    {
      id: 1,
      isDone: false,
      task: 'play guitar'
    },
    {
      id: 2,
      isDone: false,
      task: 'Eat a pizza today'
    },
    {
      id: 3,
      isDone: false,
      task: 'Excercise, always.'
    }
  ])

  const dateToday = () => {
    return new Date().toLocaleDateString()
  }

  const markDone = (id) => {
    console.log(id)
    const updatedList = list.map(task => {
      if (task.id === id) {
        if (task.isDone) {
          return { ...task, isDone: false }
        }
        return { ...task, isDone: true }
      }
      return task
    })
    setList(updatedList)
  }

  const addTask = (task) => {
    const taskWithId = { ...task, id: uuidv4() }
    const updatedList = [...list, taskWithId]
    setList(updatedList)
  }

  const removeTask = (id) => {
    console.log(id)
    const updatedList = list.filter((item) => item.id !== id)
    setList(updatedList)
  }

  return (
    <div className="py-4 items-center justify-center w-3/6 m-auto bg-red-100">
      <div className="flex flex-col w-11/12 m-auto gap-4">
        <div>
          <h2 className="text-blue-800 font-bold text-lg">
            ToDo-ToDay: {dateToday()}
          </h2></div>
        <AddTodoForm handleAdd={addTask} nextId={list.length} />
        <TodoList list={list} markDone={markDone} removeTask={removeTask} />
      </div>
    </div>
  );
}

export default App;
