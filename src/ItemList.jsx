import { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'
import { useParams } from 'react-router-dom'

export default function ItemList() {
const {catName} = useParams();

  const [items, setItems] = useState([])
  useEffect(() => {
    // fetch('https://jbh-mockserver.onrender.com/categories/fruits')
    //   .then(j => j.json())
    //   .then(data => setItems(data))

    axios.get('https://jbh-mockserver.onrender.com/categories/'+catName)
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
  }, [])



  return (
    <div className='itemList'>
      {!items.length ?
        <h1>loading...</h1> :
        items.map(f => <Item key={f.id} item={f} />)}

    </div>
  )
}
