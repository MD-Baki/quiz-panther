import { faCircleCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './QuizTotal.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizTotal = ({ ques }) => {
    const { question, options, correctAnswer, id } = ques

    const set = (data) => {
        if (data === correctAnswer) {
            toast.success('Correct Answer');
        } else {
            toast.error('Wrong Answer');
        }
    }

    const [open, setOpen] = useState(false)

    return (
        <div className='quiz-container bg-[#edeff8] border-2 border-[#dce2ff]  text-[#2b3351] rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h4 className='font-bold pb-3'>Quiz: {question}</h4>
                <button className='ml-2' onClick={() => setOpen(!open)}>
                    {
                        open ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />
                    }
                </button>
            </div>
            <div className='option grid grid-cols-2 gap-2 mt-2'>
                {
                    options.map(data => (
                        <div className='bg-white rounded-lg pl-2 flex items-center'
                            key={data} id={id}>
                            <input
                                type="radio"
                                id={data}
                                name={id}
                                value={data}
                            />
                            <label
                                onClick={() => set(data)}
                                className='pl-2 py-1 cursor-pointer inline-block w-10/12'
                                htmlFor={data}

                            >{data}</label>
                        </div>

                    ))
                }
            </div>
            <div className={`${open ? 'block' : 'hidden'}`}>
                <p className='font-bold bg-white py-1 px-2 mt-2 text-lime-700 rounded-lg'> <FontAwesomeIcon className='pr-2' icon={faCircleCheck}></FontAwesomeIcon> {correctAnswer}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizTotal;