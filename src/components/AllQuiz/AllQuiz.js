import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AllQuiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz
    return (
        <div className='border-2 border-[#afb5ce] rounded-xl p-2 text-[#2b3351]'>
            <img src={logo} alt="" className='w-full bg-[#2b3351] rounded-xl' />
            <h2 className='font-bold text-lg pt-2 px-1'>{name}</h2>
            <p className='px-1 text-md font-medium pb-2'>Quiz Quantity: <span className='font-bold'>{total}</span></p>
            <button className='w-full'><Link to={`/quiz/${id}`} className='bg-[#2b3351] font-bold text-lg py-2 rounded-lg text-white inline-block w-full'>Start Larning <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon></Link></button>
        </div>
    );
};

export default AllQuiz;