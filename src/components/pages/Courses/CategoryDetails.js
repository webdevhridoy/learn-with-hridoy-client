import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseList from './CourseList';

const CategoryDetails = () => {
    const categoryDetail = useLoaderData();
    console.log(categoryDetail);
    return (
        <div>
            <h2 className='text-2xl mt-5 md:mt-5'>Start <span className='text-green-500 font-bold'>{categoryDetail[0].category}</span> Courses</h2>
            <hr className='border-b-2 border-b-green-100 w-1/2 mx-auto h-1' />
            <div className='grid grid-cols-1 md:grid-cols-2 mt-3'>
                {
                    categoryDetail.map(details =>
                        <CourseList
                            key={details.id}
                            details={details}
                        ></CourseList>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;