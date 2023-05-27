import React from 'react';


const SectionHeader = ({heading, subHeading}) => {
    return (
        <div className='w-3/4 mx-auto mt-20'>
            <h2 className='text-center font-semibold my-4 text-3xl'>{heading}</h2>
            <h3 className='text-center text-xl my-2'>{subHeading}</h3>
        </div>
    );
};

export default SectionHeader;