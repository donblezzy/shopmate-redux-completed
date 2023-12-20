import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { add, remove } from '../store/cartSlice'
import './ProductCard.css'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const cartList = useSelector(state => state.cartState.cartList)
  const {name, price, image, id} = product

  const [isInCart, setIsInCart] = useState(false)

  useEffect(() => {
    const productIsInCart = cartList.find(item => item.id === id)
    if(productIsInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  },[cartList, id])


  return (
    <div className='productCard'>
    <img src={image} alt={name} />
    <p>{name}</p>
    <div className='action'>
        <p>${price}</p>
        { isInCart ? (<button className='remove' onClick={() => dispatch(remove(product))}>Remove</button>) : (<button onClick={() => dispatch(add(product))}>Add To Cart</button>)}
        {/*  */}
    </div>
      
    </div>
  )
}

export default ProductCard
