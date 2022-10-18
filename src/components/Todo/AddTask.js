import React, { useState } from 'react'

function AddTask({addTask}) {
  const [value,setvalue]=useState("")

  const addItem=()=>{
    addTask(value)
    setvalue("")
  }
  return (
    <>
    <div className='input-container'>
        <input type='text' className='input' value={value} onChange={(e)=>{
          setvalue(e.target.value)

        }} placeholder='Add New Task' />     
        <button className='add-btn' onClick={addItem} >Add</button>
    </div>
    </>
  )
}

export default AddTask
