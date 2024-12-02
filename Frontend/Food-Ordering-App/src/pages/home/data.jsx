import React from "react";
import "./data.css";

const Data = () => {
  const statsData = [
    { value: "546+", label: "Registered Riders" },
    { value: "789,900+", label: "Orders Delivered" },
    { value: "690+", label: "Restaurants Partnered" },
    { value: "17,457+", label: "Food Items" },
  ];

  return (
    <div className='stats-section'>
      {statsData.map((stat, index) => (
        <div className='stat' key={index}>
          <div className='stat-heading'>{stat.value}</div>
          <div className='stat-description'>{stat.label}</div>
          {index < statsData.length - 1 && <div className='divider'></div>}
        </div>
      ))}
    </div>
  );
};

export default Data;
