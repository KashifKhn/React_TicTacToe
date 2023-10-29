import React from 'react'

const Button = (props) => {
  return (
    <button>
        <img className='w-[5rem] h-[5rem]' src={props.icon} alt="" />
    </button>
  )
}

export default Button
