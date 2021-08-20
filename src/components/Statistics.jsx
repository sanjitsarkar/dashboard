import React from 'react'
import "./statistics.scss"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    sales: 2400
  },
  {
    name: 'Feb',
    sales: 2210
  },
  {
    name: 'March',
    sales: 2290
  },
  {
    name: 'April',
    sales: 2000
  },
  {
    name: 'May',
    sales: 2181
  },
  {
    name: 'June',
    sales: 2500
  },
  {
    name: 'July',
    sales: 2100
  },
];
const Statistics = () => {
    return (
        <div className="statistics">
          <h3 className="title">Statistics</h3>
            <ResponsiveContainer width="100%" height="80%">
        <BarChart
        //   width={10}
        //   height={20}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend height={20}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="sales" fill="#03a9f4" background={{ fill: '#bbb' }} />
        </BarChart>
      </ResponsiveContainer>

        </div>
    )
}

export default Statistics
