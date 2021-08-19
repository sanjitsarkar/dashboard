import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import "./statistics.scss"

const data = [
  { name: 'Mobiles', value: 20,icon:'fa fa-mobile',color:'#0088FE' },
  { name: 'Tablets', value: 20,icon:'fa fa-tablet',color:'#00C49F'},
  { name: 'Laptops', value: 20,icon:'fa fa-laptop',color:'#FFBB28'},
  { name: 'Televisions', value: 40,icon:'fa fa-tv',color:'#FF8042'},
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const ProductStock = () => {
    const onPieEnter = () => {
        
    }
    return (
        <div className="product_stock">
            
          <h3 className="title">Product Stock</h3>
          <div className="product_container">
          <PieChart width={200} height={200} onMouseEnter={onPieEnter}>
        <Pie
          data={data}
          cx={90}
          cy={80}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
  <div className="product_right">
      {
          data.map(dt=>
(<div className="label">
<div className="label_top">
    <i className={dt.icon} aria-hidden="true" style={{color:dt.color}}></i>
    <span>{dt.value}%</span>
</div>
<h4>{dt.name}</h4>
</div>)
          )
      
}

  </div>
  </div>
        </div>
    )
}

export default ProductStock
