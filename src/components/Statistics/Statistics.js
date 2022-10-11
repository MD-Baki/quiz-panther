import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quizs = useLoaderData();
    const quizsRec = quizs.data;
    return (
        <div className='md:w-10/12 lg:w-6/12 mx-auto py-14 text-[#2b3351]'>
            <h2 className='font-bold text-3xl pb-10 text-center'>Quiz Line Chart</h2>
            <div style={{ width: '100%', height: 400 }} >
                <ResponsiveContainer>
                    <BarChart
                        data={quizsRec}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Bar dataKey="total" fill="#2b3351" />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;