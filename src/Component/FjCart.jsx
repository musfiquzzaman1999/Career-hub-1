import React from 'react';
// import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow,faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const FjCart = ({f}) => {
    // console.log(f);
    const {company,address,id,salary,Title,imgBanner,job1,job2} = f;
    // console.log(id);
    return (
        <div>
            <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100  w-auto p-5  mb-14 ">
	<img src={imgBanner} alt="" className="object-cover object-center  rounded-t-md h-96 w-full dark:bg-gray-500 " />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2 items-center">
			<h2 className="text-3xl font-semibold tracking-wide">{Title}</h2>
			<p className="dark:text-gray-100">{company}</p>
            {/* <h4 className='rounded-md border-sky-500 border md:w-1/5 w-1/2 p-2 mt-5'><span className='ml-4'>{job1}</span></h4> */}
            <p>
            <span className="dark:dark:text-gray-400 border p-1 rounded  border-cyan-500">{job1}</span>
            <span className="dark:dark:text-gray-400 border p-1 ml-2 rounded border-cyan-500">{job2}</span>
            </p>
            <p className='mt-8'> <FontAwesomeIcon icon={faLocationArrow} />{address}  <span className='ml-3'><FontAwesomeIcon icon={faDollar} />{salary}</span> </p>
		</div>
		<button type="button" className="flex items-center justify-center w-1/3 p-3 font-semibold tracking-wide rounded-md bg-cyan-500 text-white"><Link to={`/cartJob/${id}`}>show more</Link></button>
       
	</div>
</div>
        </div>
    );
};

export default FjCart;