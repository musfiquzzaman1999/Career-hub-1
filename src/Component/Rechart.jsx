import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Rechart = () => {
    const rechat = useLoaderData()
    rechat.map(r=>{
        const {number,assignment}=r
        console.log(number,assignment)
    })
   
    
    // console.log(rechat)
    return (
        <div style={{ width: '100%', height: 450 }} className='mt-16 mb-16'>
        <ResponsiveContainer>
          <AreaChart
            data={rechat}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="assignment" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="number" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Rechart;