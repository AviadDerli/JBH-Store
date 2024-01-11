import CartList from '../CartList'
import style from './style.module.css'


export default function Cart({cart, setCart}) {
  return (
    <div className='cart'>
      <button onClick={()=>setCart({})}>Delete All 🧨</button>
      <CartList cart={cart} setCart={setCart}/>
    </div>
  )
}
