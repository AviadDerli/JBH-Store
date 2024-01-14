import { useContext, useEffect, useState } from "react"
import DataContext from "./context/DataContext"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

export default function ItemDetails() {
  const { itemId } = useParams()
  const { cart, setCart } = useContext(DataContext)
  const nav = useNavigate()

  const [item, setItem] = useState({})
  let { name, price, emoji, id } = item

  useEffect(() => {
    axios.get('https://jbh-mockserver.onrender.com/items/' + itemId)
      .then(({data}) => {
        if (!data) { return nav('/notfound') }
        setItem(data)
      })
  }, [])

  const handlePlus = (id) => {
    let copied = { ...cart }
    if (cart[id]) {
      copied[id].qty += 1
    }
    else {
      copied[id] = { ...item, qty: 1 }
    }
    setCart(copied)
  }
  const handleMinus = (id) => {
    if (!cart[id]) return;
    let copied = { ...cart }
    if (copied[id].qty > 1) {
      copied[id].qty -= 1
    }
    else {
      delete copied[id]
    }
    setCart(copied)
  }
  console.log("id", id);
  return (
    <div>
      <h2>{id} | {name}</h2>
      <h1>{emoji}</h1>
      <h4>{price}</h4>
      <div>
        <button onClick={() => handlePlus(id)}>+</button>
        <span>{id && (cart[id] ? cart[id].qty : 0)}</span>
        <button onClick={() => handleMinus(id)}>-</button>
      </div>
    </div>
  )
}
