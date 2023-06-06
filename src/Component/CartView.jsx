import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow,faDollarSign,faCalendar,faPhone,faMailBulk} from '@fortawesome/free-solid-svg-icons'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const CartView = () => {
    const value = useLoaderData();
    console.log(value)
    const {JobDescription,EducationalRequirements,Experiences,JobResponsibility,Title,address,company,phone,salary,email,id} = value;

   
        const [feature,setFeature]=useState([]);
        
    //     useEffect(()=>{
    //         fetch("../../public/company.json")
    //         .then(res=>res.json())
    //         .then(data=>setFeature(data))
    //     },[])
    //     console.log(feature)
    //     const newF = feature.map((i=>console.log(i)))
    //     const {id,email} = newF;
    
      const handleApply =(id)=>{
        addToDb(id);
      }
    //   const applyJob = getShoppingCart();
    //   let jobApply =[];
    //   for(const job in applyJob){
    //     const newJob =feature.filter((j)=>j.id===id)
    //     if(!newJob){
    //         alert ('you already add this')
    //     }


    //   }
    return (
        <div className='mb-16 mt-16'>
           <div> 
            <h1 className='text-center text-6xl font-semibold mb-16 '>Job Details</h1>
            </div> 
            <div className='flex gap-16 p-10 ml-56'>
                <div className='w-1/2'>
                    <p className='mb-8'><span className='font-semibold'>Job Description:</span> {JobDescription}</p>
                    <p className='mb-8'><span className='font-semibold'>Job Responsibility:</span> {JobResponsibility}</p>
                    <p className='mb-8'><span className='font-semibold'>Educational Requirements:</span> {EducationalRequirements}</p>
                    <p className='font-semibold'>Experiences:</p>
                    <p>{Experiences}  Years in this field.</p>

                </div>

                <div className='ml-8'>
                    <h1 className='font-semibold text-2xl mb-4'>Job Details</h1>
                    <p><FontAwesomeIcon icon={faDollarSign} /><span className='font-semibold'>Salary:</span>{salary} per month</p>
                    <p><FontAwesomeIcon icon={faCalendar} /><span className='font-semibold mb-4'>Job Title:</span>{Title}</p>
                    <h1 className='font-semibold text-2xl mt-5'>Contact Information</h1>
                    <p><FontAwesomeIcon icon={faPhone} /><span className='font-semibold'>Phone-Number:</span>{phone}</p>
                    <p><FontAwesomeIcon icon={faMailBulk} /><span className='font-semibold'>email:</span>{email}</p>
                    <p><FontAwesomeIcon icon={faLocationArrow} /><span className='font-semibold'>Address:</span>{address}</p>
                    
                    <button className="flex items-center justify-center   p-2 font-semibold btn btn-active btn-primary mt-6" onClick={()=>handleApply(id)}> Apply Now</button>

                </div>
            </div>
        </div>
    );
};

export default CartView;