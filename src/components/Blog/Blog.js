import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-11/12 lg:w-9/12 mx-auto py-14 text-[#2b3351]'>
            <h2 className='font-bold text-3xl pb-7 text-center'>Blog</h2>
            <div className='grid gap-6'>
                <div className='p-5 border-4 bg-[#f3f5fd] border-[#2b3351] rounded-lg'>
                    <h4 className='font-bold text-xl pb-2 mb-2 border-b-2 border-[#2b3351]'>Why React Router is used?</h4>
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className='p-5 border-4 bg-[#f3f5fd] border-[#2b3351] rounded-lg'>
                    <h4 className='font-bold text-xl pb-2 mb-2 border-b-2 border-[#2b3351]'>How dose context api work?</h4>
                    <p>React.createContext is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
                <div className='p-5 border-4 bg-[#f3f5fd] border-[#2b3351] rounded-lg'>
                    <h4 className='font-bold text-xl pb-2 mb-2 border-b-2 border-[#2b3351]'>What is useRef?</h4>
                    <p>Essentially, useRef is like a “box” that can hold a mutable value in its . current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with ref=myRef, React will set its .current property to the corresponding DOM node whenever that node changes.
                        However, useRef is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
                        This works because useRef creates a plain JavaScript object. The only difference between useRef and creating a current: object yourself is that useRef will give you the same ref object on every render.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;