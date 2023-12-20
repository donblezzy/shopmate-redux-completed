import React from 'react'
import useTitle from '../Hooks/useTitle'
import ProductCard from '../components/ProductCard'

const Home = () => {

  useTitle("Home")

  const products = [
    { "id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.jpg" },
    { "id": 2, "name": "bOAt Rockerz 450", "price": 49, "image": "/assets/images/1002.jpg" },
    { "id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.jpg" },
    { "id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/1004.jpg" },
    { "id": 5, "name": "Apple Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1005.jpg" },
    { "id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png" }
  ]
  return (
    <main>
      <section className='products'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export default Home
