import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow,faDollar } from '@fortawesome/free-solid-svg-icons'
import DropDown from './Component/DropDown';
import { Link } from 'react-router-dom';

const CartApplay = ({d}) => {
    // console.log(d)
    const {Title,address,company,salary,imgBanner,job1,id,job2} = d;
    
    return (
        <div>
           
            <div>
            <div className='flex w-1/2 border justify-between p-4 mb-6 mx-auto'>
           <div>
           <div className="max-w-md  sm:flex sm:space-x-6 dark:dark:bg-gray-900 dark:dark:text-gray-100 w-full ">
	<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src={imgBanner} alt="" className="object-cover object-center w-full h-full rounded dark:dark:bg-gray-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">{Title}</h2>
			<span className="text-sm dark:dark:text-gray-400">{company}</span>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				
				<span className="dark:dark:text-gray-400 border p-1 rounded border-cyan-500">{job1}</span>
                <span className="dark:dark:text-gray-400 border p-1 rounded border-cyan-500">{job2}</span>
			</span>
			<span className="flex items-center space-x-2">
				
				<span className="dark:dark:text-gray-400"><FontAwesomeIcon icon={faLocationArrow} />{address}</span>
                <span className="dark:dark:text-gray-400"><FontAwesomeIcon icon={faDollar} />{salary}</span>
                
			</span>
		</div>
	</div>
</div>

           </div>
           <div className=' flex items-center'>
            {/* button */}
            <button className='btn bg-cyan-500 text-white'><Link to={`/cartJob/${id}`}>View Details</Link></button>

           </div>
        </div>
            </div>
        </div>
    );
};

export default CartApplay;