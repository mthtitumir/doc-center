import React from 'react';

const ButtonOutline = ({text, width}) => {
    return (
        <button className='w-full border-orange-600 border-2 rounded-md px-4 py-2 font-semibold uppercase hover:bg-orange-600 hover:text-white'>{text}</button>
    );
};

export default ButtonOutline;