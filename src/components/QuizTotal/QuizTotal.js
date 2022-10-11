import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './QuizTotal.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizTotal = ({ ques }) => {
    console.log(ques);
    const { question, options, correctAnswer } = ques

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
            <ol className='option grid grid-cols-2 gap-2 mt-2'>
                <li>1. {options[0]}</li>
                <li>2. {options[1]}</li>
                <li>3. {options[2]}</li>
                <li>4. {options[3]}</li>
            </ol>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizTotal;