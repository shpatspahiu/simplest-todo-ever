import React from 'react'

const AddTodoForm = () => {
  return (
    <>
      <div className='flex gap-2 justify-between bg-red-100'>
        <input
          type='text'
          name='todo'
          id='todo'
          className='bg-yellow-100 px-2 rounded-md'
        />
        <div
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
