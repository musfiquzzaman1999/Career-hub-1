import React from 'react';

const JobCart = ({j}) => {
    // console.log(j);
    const {job,picture,name}=j;
    return (
        <div>
           <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src={picture} alt="" className="object-cover object-center w-48 rounded-md h-48  dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold tracking-wide">{name}</h2>
	</div>
	<p className="dark:text-gray-100">{job} Jobs Available</p>
</div> 
        </div>
    );
};

export default JobCart;