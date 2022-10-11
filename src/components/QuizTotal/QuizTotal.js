import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './QuizTotal.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizTotal = ({ ques }) => {
    const { question, options, correctAnswer } = ques
    // console.log(options);
    const ans = () => {
        toast.success(correctAnswer, {
            position: "top-center"
        });
    }

    return (
        <div className='quiz-container bg-[#edeff8] border-2 border-[#dce2ff]  text-[#2b3351] rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h4 className='font-bold pb-3'>Quiz: {question}</h4>
                <button className='ml-2' onClick={ans}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
            </div>
            <div className='option grid grid-cols-2 gap-2 mt-2'>
                {
                    options.map((data) => (
                        <div className='bg-white py-2 px-3 rounded-lg' key={data}>
                            <input type="radio"></input><span className='pl-2'>{data}</span>
                        </div>

                    ))
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizTotal;