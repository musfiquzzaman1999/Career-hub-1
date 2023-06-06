import React, { useEffect, useState } from 'react';
import FjCart from './FjCart';

const FeaturedJob = () => {
    const [feature,setFeature]=useState([]);
    const[showAll,setShowall]=useState(false)
    useEffect(()=>{
        fetch("/company.json")
        .then(res=>res.json())
        .then(data=>setFeature(data))
    },[])
    const handelShowAll=()=>{
       setShowall(true)
    }
    
    

    
    return (
        <div>
            <div className='mt-32'>
                <div className='mb-12'>
           <h1 className='text-5xl text-center'>Featured Jobs</h1>
           <p className='text-center mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p></div>
           </div>
           <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:ml-20 ml-2 md:mr-20 mr-2 '>
            {
                feature.slice(0,showAll?6:4).map(f=><FjCart key={f.id} f={f} ></FjCart>)
            }
           </div>
          {
            !showAll && <span onClick={handelShowAll}><button className="flex items-center justify-center w-1/3 p-3 font-semibold tracking-wide rounded-md bg-cyan-500 text-white mx-auto mb-16">view all</button></span>
          }
        </div>
       
    );
};

export default FeaturedJob;