import Item from './Item'
import data from './data'

export default function ItemList() {

  return (
    <div className='itemList'>
      {
        data.fruits.map(f=><Item  key={f.id} item={f}/>)
      }
      
    </div>
  )
}
