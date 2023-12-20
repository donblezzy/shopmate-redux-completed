import React from 'react'
import { useSelector} from 'react-redux'
import useTitle from '../Hooks/useTitle'
import Card from '../components/Card'

const Cart = () => {

  useTitle("Cart")

  const cartList = useSelector(state => state.cartState.cartList)
  const total = useSelector(state => state.cartState.total)

  return (
    <main>
    <section className='cart'>
    <h1>Cart Items: {cartList.length} / ${total}</h1>
    {cartList.map((product) => (
      <Card key={product.id} product={product} />
    ))}

    </section>  
    </main>
  )
}

export default Cart
