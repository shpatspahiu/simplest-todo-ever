import React from 'react'

const SingleTask = ({ id, isDone, task, markDone, removeTask }) => {
  return (
    <div>
      <li
        className={`
      flex justify-between items-center`}
      >
        <div className={`${!isDone ? '' : 'line-through'}`}>{task}</div>
        <div className='flex gap-x-2'>
          <div
            onClick={() => {
              markDone(id)
            }}
            className={`${
              !isDone ? 'bg-green-200' : 'bg-yellow-400'
            } my-1 text-center text-sm p-1 rounded-md w-fit hover:cursor-pointer active:scale-90`}
          >
            {!isDone ? 'Mark done' : 'Mark undone'}
          </div>
          <div
            onClick={() => {
              removeTask(id)
            }}
            className='hover:cursor-pointer active:scale-90 self-center bg-red-400 w-min h-min'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-x'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M18 6l-12 12' />
              <path d='M6 6l12 12' />
            </svg>
          </div>
        </div>
      </li>
    </div>
  )
}

export default SingleTask
