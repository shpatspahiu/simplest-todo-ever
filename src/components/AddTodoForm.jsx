import React from 'react'
import { useImmer } from 'use-immer'

const AddTodoForm = ({ handleAdd, nextId }) => {
  const [item, setItem] = useImmer({
    id: nextId,
    task: '',
    isDone: false
  })

  const handleChange = e => {
    setItem(draft => {
      draft[e.target.name] = e.target.value
    })
  }

  return (
    <>
      <div className='flex gap-2 justify-between bg-red-100'>
        <input
          type='text'
          name='task'
          id='todo'
          value={item.task}
          onChange={handleChange}
          className='bg-yellow-100 px-2 rounded-md'
        />
        <div
          onClick={() => {
            handleAdd(item)
          }}
          className='
        add-btn
      bg-green-600 
        p-2 text-slate-200
        text-sm
        rounded-md active:scale-90 hover:cursor-pointer'
        >
          Add
        </div>
      </div>
    </>
  )
}

export default AddTodoForm
