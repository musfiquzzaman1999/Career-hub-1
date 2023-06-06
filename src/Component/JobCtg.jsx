import React, { useEffect, useState } from 'react';
import JobCart from './JobCart';

const JobCtg = () => {
    const [job,setJob]=useState([]);
    useEffect(()=>{
        fetch("job.json")
        .then(res=>res.json())
        .then(data=>setJob(data))
    },[])
    return (
        <div>
            <div>
                <div className='mb-12'>
                <h1 className='text-5xl text-center'>Job Category List</h1>
                <p className='text-center mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p></div>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-5 md:ml-8 ml-12 p-3 '>
            {
                job.map(j=><JobCart key={job._id} j={j}></JobCart>)
            }
            
            </div>
        </div>
    );
};

export default JobCtg;