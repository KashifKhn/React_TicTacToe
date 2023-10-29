import React from 'react'

const Icon = (props) => {
  return (
    <button>
        <img className='w-[5rem] h-[5rem] max-sm:w-[3rem] max-sm:h-[3rem]' src={props.icon} alt="" />
    </button>
  )
}

export default Icon
