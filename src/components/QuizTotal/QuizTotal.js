import React from 'react';

const QuizTotal = ({ ques }) => {
    console.log(ques);
    const { question } = ques
    return (
        <div>
            <p>{question}</p>
        </div>
    );
};

export default QuizTotal;