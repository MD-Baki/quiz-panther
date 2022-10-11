import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTotal from '../QuizTotal/QuizTotal';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const quizList = quiz.data;
    const question = quizList.questions;
    return (
        <div className="md:w-11/12 lg:w-9/12 mx-auto py-20">
            <h2 className='col-span-4 font-bold text-3xl text-[#2b3351] pb-3 text-center'>Quiz of {quizList.name}</h2>
            {
                question.map(ques => <QuizTotal
                    key={ques.id}
                    ques={ques}
                ></QuizTotal>)
            }
        </div>
    );
};

export default QuizDetails;