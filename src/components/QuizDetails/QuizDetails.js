import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTotal from '../QuizTotal/QuizTotal';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const quizList = quiz.data;
    const question = quizList.questions;
    return (
        <div className="w-11/12 lg:w-9/12 mx-auto py-10 md:py-20">
            <h2 className='col-span-4 font-bold text-3xl text-[#2b3351] pb-3 text-center'>Quiz of {quizList.name}</h2>
            <div className='grid lg:grid-cols-2 gap-6 md:gap-10 mt-5'>
                {
                    question.map(ques => <QuizTotal
                        key={ques.id}
                        ques={ques}
                    ></QuizTotal>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;