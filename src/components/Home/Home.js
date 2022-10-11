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
            <div className="w-11/12 lg:w-9/12 mx-auto py-10 md:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <h2 className='md:col-span-2 lg:col-span-4 font-bold text-3xl text-[#2b3351] pb-3 text-center md:text-left'>Quiz Topics</h2>
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