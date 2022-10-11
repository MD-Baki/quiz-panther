import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AllQuiz = ({ quiz }) => {
    const { name, logo } = quiz
    return (
        <div className='border-2 border-[#afb5ce] rounded-xl p-2 text-[#2b3351]'>
            <img src={logo} alt="" className='w-full bg-[#2b3351] rounded-xl' />
            <h2 className='font-bold text-lg pt-2 px-1'>{name}</h2>
            <p className='px-1 text-md font-medium pb-2'>Quiz Quantity: <span className='font-bold'>00</span></p>
            <button className='bg-[#2b3351] font-bold text-lg py-2 rounded-lg text-white w-full'>Start Larning <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon> </button>
        </div>
    );
};

export default AllQuiz;