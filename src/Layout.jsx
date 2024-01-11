import { useState } from 'react'
import Cart from './Cart'
import Content from './Content'
import DataContext from './context/DataContext'

export default function Layout() {
  const [cart, setCart] = useState({})
  return (
    <div className='layout'>

      <DataContext.Provider value={{ cart, setCart }}>
        <Cart cart={cart} setCart={setCart} />
        <Content cart={cart} setCart={setCart} />
      </DataContext.Provider>

    </div>
  )
}
