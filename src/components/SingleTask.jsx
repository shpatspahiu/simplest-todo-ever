import React from 'react'

const SingleTask = ({ id, isDone, task, markDone }) => {
  return (
    <div>
      <li
        className={`
      flex justify-between items-center`}
      >
        <div className={`${!isDone ? '' : 'line-through'}`}>{task}</div>
        <div
          onClick={() => {
            markDone(id)
          }}
          className={`${
            !isDone ? 'bg-green-200' : 'bg-red-400'
          } my-1 text-center text-sm p-1 rounded-md w-fit hover:cursor-pointer active:scale-90`}
        >
          {!isDone ? 'Mark done' : 'Mark undone'}
        </div>
      </li>
    </div>
  )
}

export default SingleTask
