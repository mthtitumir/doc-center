import React from 'react';

const Button = ({text}) => {
    return (
        <button type='submit' className='hover:border-orange-600 hover:border-2 rounded-md px-4 py-2 w-full font-semibold uppercase bg-orange-600 hover:bg-base-300 hover:text-black text-white'>{text}</button>
    );
};

export default Button;