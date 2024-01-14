import { useEffect, useState } from 'react'
import Cart from './Cart'
import Content from './Content'
import DataContext from './context/DataContext'

export default function Layout() {
  const [cart, setCart] = useState({})

    //  useEffect(     function,  dependencies      )      
    //  useEffect(     what to do,  when      )      

    // mounting - first time
    useEffect(()=>{
      console.log(" 🧨🧨🧨 First Time 🧨🧨🧨");

    }  , [] ) 


    // updating - every time state/props change 
    useEffect(()=>{
      console.log("Cart ✨ updated : ", cart)
    }  , [cart] )

    useEffect(()=>{
      console.log("Updated 👓👓👓👓👓")
    }  )

    // useEffect(()=>{})

  return (
    <div className='layout'>

      <DataContext.Provider value={{ cart, setCart }}>
        <Cart  />
        <Content  />
      </DataContext.Provider>

    </div>
  )
}
