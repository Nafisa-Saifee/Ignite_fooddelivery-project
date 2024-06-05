import React, { useContext} from 'react'
import './FoodItem.css'
import { StoreContest } from '../Contest/StoreContest'
import {assets} from '../../assets/assets'

const FoodItem = ({id,name,price,discription,image}) => {

const {cartItems,addToCart,removeFromCart,url} =useContext(StoreContest);

  return (
    <div className='food-item'>
        <div className="food-item-container">
            <img className='food-item-image' src={url+"/images/"+image} alt=""/>
                {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon}></img>
                :<div className="food-item-counter">
                    <img className='minus-icon' onClick={()=>removeFromCart(id)} src={assets.minus_icon} alt="" />
                    <p>{cartItems[id]}</p>
                    <img className='plus-icon' onClick={()=>addToCart(id)} src={assets.plus_icon} alt="" />
                 </div>
                }
                <div className="food-item-info">
                    <p className="food-item-name">{name}</p>
                    <p className="food-item-desc">{discription}</p>
                    <p className="food-item-price">${price}</p>
                </div>
                
        </div>
    </div>

  )
}

export default FoodItem