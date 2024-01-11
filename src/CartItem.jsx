export default function CartItem({ item ,cart, setCart}) {
  const { name, price, emoji,id } = item
  
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
    if(cart[id]){
      let newCart = { ...cart }      
      if(newCart[id].amount==1){
        delete newCart[id]
        return setCart(newCart)
      }
      newCart[id].amount-=1
      setCart(newCart)
    }
  }
  
  return (
    <div className="item item-cart">
      <h5>{name}</h5>
      <h4>{emoji}</h4>
      <h6>{price}</h6>


      <button onClick={handlePlus}>+</button>
      <span>{cart[id]?.amount || 0 }</span>
      <button onClick={handleMinus}>-</button>
    </div>
  )
}
