import React from 'react'
import SingleTask from './SingleTask'

const TodoList = ({ list, markDone, removeTask }) => {
  return (
    <div className='flex flex-col gap-1 bg-slate-300 px-4'>
      <ul>
        {list.map(item => {
          return (
            <SingleTask
              id={item.id}
              isDone={item.isDone}
              task={item.task}
              key={item.id}
              markDone={markDone}
              removeTask={removeTask}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
