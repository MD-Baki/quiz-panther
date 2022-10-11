import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <div className="container mx-auto flex items-center h-full">
                    <div className='text-white'>
                        <h1 className='font-bold text-3xl'>Center for <span className='text-[#5fe0e9]'>Digital Education.</span></h1>
                        <p className='w-7/12 py-5'>If you want to expand your knowledge, quiz occupies an important place. So if you want to see the extent of your knowledge then stay with us by answering the simple quiz on our site.</p>
                        <button className='bg-[#2b3351] font-bold text-lg px-5 py-2 rounded-lg'>Start Larning <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;