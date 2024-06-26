import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { food_list } from "../../assets/assets";



export const StoreContest = createContext(null)

const StoreContestProvider = (props) => {

        const [cartItems, setCartItems] = useState({});

        const url = "http://localhost:4000";

        const [token,setToken] = useState("");

        


        const addToCart = async (itemId) => {
                if (!cartItems[itemId]) {
                        setCartItems((prev)=>({ ...prev, [itemId]:1 }));
                }
                else {
                        setCartItems((prev)=>({ ...prev,[itemId]:prev[itemId]+1}));
                }
                if (token){
                        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
                }
        }
        const revomeFromCart =  async (itemId) => {
                setCartItems((prev)=>({ ...prev,[itemId]:prev[itemId]-1}));
                if (token) {
                  await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})      
                }

        }
        const getTotalCartAmount = () => {
                let totalAmount = 0;
                for (const item in cartItems) {
                        if (cartItems[item]>0) {
                                let itemInfo = food_list.find((product)=>product._id === item);
                                totalAmount += itemInfo.price*cartItems[item];
                        }
                }
                return totalAmount;
        }

        const fetchFoodList = async () => {
                const response = await axios.get(url+"/api/food/list");
                setFoodList(response.data.data)
        }

        const loadCartData = async (token) => {
                const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
                setCartItems(response.data.cartData);
        }
        useEffect(()=>{
        async function loadData() {
                 await fetchFoodList();
                        if (localStorage.getItem("token")) {
                          setToken(localStorage.getItem("token"));
                          await loadCartData(localStorage.getItem("token"));
                        }
                }
                loadData();
        },[])

        const contextValue = {
                food_list,
                cartItems,
                setCartItems,
                addToCart,
                revomeFromCart,
                getTotalCartAmount,
                fetchFoodList,
                url,
                token,
                setToken
        }
        return (
                <StoreContest.Provider value={contextValue}>
                        {props.children}
                </StoreContest.Provider>
        )
}
export default StoreContestProvider;