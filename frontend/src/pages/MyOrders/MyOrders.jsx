import React, { useContext, useState } from 'react'
import './MyOrders.css'
import { StoreContest } from '../../components/Contest/StoreContest';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

        const [url,token] = useContext(StoreContest)
        const [data,setData] = useState([]);

        const fetchOrders = async () => {
                const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
                setData(response.data.data);
        }

        useEffect(()=>{
          if (token) {
            fetchOrders();
          }
        },[token])

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order,index)=>{
          return (
            <div key={index} className='my-orders-order'>
              <img src={assets.parcel_icon} alt="" />
              <p>{order.item.map((item,index)=>{
                if (index === order.item.length-1) {
                  return item.name+" x "+item.quantity
                }
                else{
                  return item.name+" x "+item.quantity+", "
                }
              })}</p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span>&#x25cf;</span> <b>{order.status}</b></p>
              <button onClick={fetchOrders}>Trace Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders