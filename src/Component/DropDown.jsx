import React from 'react';

const DropDown = ({cart}) => {
    console.log(cart)

    return (
        <div>
           <div className="dropdown">
  <label tabIndex={0} className="btn m-1">Filter By</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Remote</a></li>
    <li><a>Full-time</a></li>
  </ul>
</div>

        </div>
    );
};

export default DropDown;