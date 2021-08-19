import React from 'react'
import "./statistics.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2011',
    laptops: 30,
    iphones: 35
  },
  {
    name: '2012',
    laptops: 10,
    iphones: 25
  
  },
  {
    name: '2013',
    laptops: 40,
    iphones: 55
 
  },
  {
    name: '2014',
    laptops: 10,
    iphones: 35
  },
  {
    name: '2015',
    laptops: 90,
    iphones: 75
  },
  {
    name: '2016',
    laptops: 20,
    iphones: 75
  },
  {
    name: '2017',
    laptops: 80,
    iphones: 75
  },
];
const Revenue = () => {
    return (
        <div className="revenue">
          <h3 className="title">Revenue</h3>
            <ResponsiveContainer width="100%" height="80%">
            <AreaChart
        //   width={500}
        //   height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="iphones" stackId="1" stroke="white" fill="rgb(3, 169, 244)" />
          <Area type="monotone" dataKey="laptops" stackId="1" stroke="orange" fill="crimson" />
        </AreaChart>
      </ResponsiveContainer>

        </div>
    )
}

export default Revenue
