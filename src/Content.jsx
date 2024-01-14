import Categories from './Categories'
import ItemDetails from './ItemDetails'
import ItemList from './ItemList'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NotFound from './NotFound'

export default function Content() {
  const nav=useNavigate() 
  return (
    <div className='content'>
      <div onClick={()=>nav('/')}>🏡 home</div>
      <Routes>
        {/*              where                what */}
        <Route path='/' element={<Categories />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:catName' element={<ItemList />} />
        <Route path='/item/:itemId' element={<ItemDetails />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
