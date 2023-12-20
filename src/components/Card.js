import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
import './Card.css'

const Card = ({ product }) => {
    const dispatch = useDispatch()
    const { name, price, image } = product
    
    return (
        <main>
            <section className='cartCard'>
                <img src={image} alt={name} />
                <p className='productName'>{name}</p>
                <p className='productPrice'>${price}</p>
                <button onClick={() => dispatch(remove(product))}>Remove</button>
            </section>
        </main>
    )
}

export default Card 
