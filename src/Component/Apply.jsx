import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartApplay from '../CartApplay';
import ClipLoader from "react-spinners/ClipLoader";
import { getShoppingCart } from '../../utilities/fakedb';
import DropDown from './DropDown';

const Apply = () => {
    const [apply,setApply] = useState([]);
    const [datas,setDatas] = useState([]);
    const [lata,setLata] = useState([]);

    useEffect(()=>{
        fetch('company.json')
        .then(res => res.json())
        .then(data => setApply(data))
    },[])
    // console.log(apply)
   useEffect (()=>{
    let cart = [];
    const saveCart = getShoppingCart();
    for(const id in saveCart){
        const foundProduct = apply.find(product => product.id == id)
        // console.log(apply)
        if(foundProduct){
            foundProduct.quantity = saveCart[id];
            cart.push(foundProduct);
        }
    }
    setDatas(cart)
    setLata(cart)
   },[apply])
   console.log(datas);

    
    const handleOnSite = () => {
        const sortData = lata?.filter((data) => data.job1 === "Remote");
    
        setDatas(sortData);
      };
      const handleOnOnsite = () => {
        const sortData = lata?.filter((data) => data.job1 === "Onsite");
    
        setDatas(sortData);
      };


    
  
   
    return (
        <div>
          

            <h1 className='text-center text-5xl font-bold mt-16 mb-5 '>Applied Jobs</h1>
            <div className='text-center  mb-8'>
            <div>
           <div className="dropdown">
  <label tabIndex={0} className="btn m-1">Filter By</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a onClick={handleOnSite}>Remote</a></li>
    <li><a onClick={handleOnOnsite}>On site</a></li>
  </ul>
</div>

        </div>
            </div>
            {
            
            datas.map(d=><CartApplay key={d.id} d={d}></CartApplay>)
            }
        </div>
    );
};

export default Apply;
