import { createContext, useEffect, useState, useContext } from "react";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    const cart = {};
    for(let index = 0; index < 300 + 1; index ++){
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [product, setProduct] = useState([]);
    const [itemCart, setItemCart] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:4000/allproducts').then((data) => data.json()).then((data) => {setProduct(data)});
    },[])

    const AddToCart = (itemId) => {
        setItemCart((prev) => ({...prev, [itemId]: (prev[itemId] || 0) + 1}));
    }

    const RemoveFromCart = (itemId) => {
        setItemCart((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const RemoveAll = (itemId) => {
        setItemCart((prev) => ({...prev, [itemId]: 0}));
    }

    const AddQuantity = (itemId, quantity) => {
        setItemCart((prev) => ({...prev, [itemId]: (prev[itemId] || 0) + quantity}))
    }

    const GetTotalCartItem = () => {
        let totalcartitem = 0;
        for(const item in itemCart){
            if(itemCart[item] > 0){
                totalcartitem +=1;
            }
        }
        return totalcartitem;
    }

    const GetTotalAmount = () => {
        let totalamount = 0;
        for(const item in itemCart){
            if(itemCart[item] > 0){
                let itemInfo = product.find((e) => e.id === Number(item));
                totalamount += itemInfo.current_price * itemCart[item];
            }
        }
        return totalamount;
    }

    const ContextValue = {AddToCart, RemoveFromCart, RemoveAll, product, itemCart, GetTotalCartItem, AddQuantity, GetTotalAmount};

    return(
        <ShopContext.Provider value = {ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;