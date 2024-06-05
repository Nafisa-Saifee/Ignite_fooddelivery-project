import React, { useState } from 'react'
import './Add.css'
import {upload_area} from '../../assets/assets'
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({url}) => {

  const[image,setImage] = useState(false);
  const [data,setData] = useState({
      name:"",
      discription:"",
      price:"",
      category:"Dessert"
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value})) 
  }

  const onSubmitHandler = async (event) =>{
      event.preventDefault();
      const formData = new FormData();
      formData.append("name",data.name)
      formData.append("discription",data.discription)
      formData.append("price",Number(data.price))
      formData.append("category",data.category)
      formData.append("image",image)
      
      const response = await axios.post(`${url}/api/food/add`,formData);
      if(response.data.success){
        setData({
          name:"",
          discription:"",
          price:"",
          category:"Dessert"
        })
        setImage(false)
        toast.success(response.data.message)
      }
      else{
        toast.error(response.data.message)
      }
  }



  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-discription flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.discription} name='discription' rows="6" placeholder='Write content here'></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler}  name='category'>
              <option value="Dessert">Dessert</option>
              <option value="Fast-Food">Fast-Food</option>
              <option value="Lunch">Lunch</option>
              <option value="Salad">Salad</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>
          <div className="add-price flex-col">
                <p>Product price</p>
                <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' />
          </div>
        </div>
        <button className='add-button' type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default Add