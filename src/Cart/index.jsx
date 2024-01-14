import { useContext, useEffect, useState } from 'react'
import CartList from '../CartList'
import style from './style.module.css'
import DataContext from '../context/DataContext'
import Total from '../Total'


export default function Cart() {
  const { cart, setCart } = useContext(DataContext)
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    let sum = 0;
    Object.values(cart).forEach(c => sum += (c.price * c.amount))
    setTotal(sum.toFixed(2))
  }, [cart])

  return (
    <div className='cart'>
      <button onClick={() => setCart({})}>Delete All 🧨</button>
      <CartList />
      <Total total={total} />
    </div>
  )
}
