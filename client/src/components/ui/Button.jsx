import React from 'react'
import { getIconComponent } from '../../lib';

const Button = ({ type, iconName, text, background, onclick }) => {
  const Icon = getIconComponent(iconName);

  return (
    <div className='flex justify-center items-center z-10'>
      <button
        type={type}
        className={`flex w-full items-center justify-center rounded-md border-[2.5px] border-gray-300 px-10 py-2 text-gray-900 hover:shadow-md hover:shadow-gray-300 focus:outline-none ${background ? background + ' text-white' : ''}`}
        onClick={onclick}
      >
        {Icon && <Icon className="w-6 h-6 mr-2" />}
        <span className="text-lg font-medium"> {text} </span>
      </button>
    </div >
  )
}

export default Button








