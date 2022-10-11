import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuiz from '../AllQuiz/AllQuiz';
import Banner from '../Banner/Banner';
import './Home.css'


const Home = () => {
    const topics = useLoaderData();
    const allQuiz = topics.data;
    return (
        <div className="home-sec">
            <Banner></Banner>
            <div className="container mx-auto py-20 grid grid-cols-4 gap-4">
                <h2 className='col-span-4 font-bold text-3xl text-[#2b3351] pb-3'>Quiz Topics</h2>
                {
                    allQuiz.map(quiz => <AllQuiz
                        key={quiz.id}
                        quiz={quiz}
                    ></AllQuiz>)
                }
            </div>
        </div>
    );
};

export default Home;