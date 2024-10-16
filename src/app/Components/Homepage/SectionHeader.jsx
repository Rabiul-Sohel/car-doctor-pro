import React from 'react';

const SectionHeader = ({header, subHeader, text}) => {
    return (
        <div className='text-center w-3/5 mx-auto space-y-4'>
            <h4 className='text-primary font-bold text-2xl'> {subHeader} </h4>
            <h3 className='text-5xl font-bold'>{header}</h3>
            <p className='tracking-wide text-gray-500'> {text} </p>
        </div>
    );
};

export default SectionHeader;