import React from 'react';

const SharedTitle = ({title, subtitle}) => {
    return (
        <div className='flex flex-col items-center justify-center mb-6 md:mb-10'>
            <h2 className='text-2xl lg:text-4xl font-medium mb-2 uppercase'>{title}</h2>
            <p className='lg:text-lg'>{subtitle}</p>
        </div>
    );
};

export default SharedTitle;