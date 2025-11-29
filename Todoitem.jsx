import React from 'react'
import tic from '../todolist2 asset/tick.png'
import nottic from '../todolist2 asset/not_tick.png'
import deletee from '../todolist2 asset/delete.png'
const Todoitem = ({text,ondelete,iscompleted,id,oncomplete}) => {
  return (
    <div className='flex items-center my-3 gap-2 '>
      <div className='flex flex-1 items-center cursor-pointer'>
   <img  onClick = {() => oncomplete(id)} src={iscompleted? tic : nottic} alt="" className='w-7' />
      <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
        ${iscompleted? 'line-through':''} `}>{text}</p>
      </div>
     <img  src={deletee} onClick={() => ondelete(id)} className='w-3.5 cursor-pointer' alt="" />
      
    </div>
  )
}

export default Todoitem
