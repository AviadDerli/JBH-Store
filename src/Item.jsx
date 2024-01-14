import { Link, useNavigate } from "react-router-dom"
import DataContext from "./context/DataContext"
import { useContext } from "react"

export default function Item({ item }) {
  const { name, price, emoji, id } = item
const nav = useNavigate()
  const { cart, setCart } = useContext(DataContext)


  const handlePlus = () => {
    let newCart = { ...cart }
    if (cart[id]) {
      newCart[id].amount += 1
    }
    else {
      newCart[id] = { ...item, amount: 1 }
    }
    setCart(newCart)
  }
  const handleMinus = () => {
    if (cart[id]) {
      let newCart = { ...cart }
      if (newCart[id].amount == 1) {
        delete newCart[id]
        return setCart(newCart)
      }
      newCart[id].amount -= 1
      setCart(newCart)
    }
  }

  return (
    <div className="item" >
      <div onClick={()=> nav('/item/'+id)}>
        <h2>{name}</h2>
        <h1>{emoji}</h1>
        <h3>{price}</h3>
      </div>
      <button onClick={handlePlus}>+</button>
      <span>{cart[id]?.amount || 0}</span>
      {/* <span>{cart[id]? cart[id].amount : 0 }</span> */}
      <button onClick={handleMinus}>-</button>
    </div>
  )
}
