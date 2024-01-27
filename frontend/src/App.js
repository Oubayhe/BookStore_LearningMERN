import Footer from './components/footer'
import TopBar from './components/topBar'

// Routes in React
import { Routes, Route } from 'react-router-dom'
import Books from './components/books'
import Categories from './components/categories'
import Favorites from './components/favorites'
import Details from './components/details'
import Create from './components/create'

function App() {
  const categories = ["Science", "Sport", "Cooking", "Computer Science"]
  const images = ["img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]

  return (
    <div>
      <TopBar />
      {/* Test the Routes over here */}
      <Routes>
        <Route path='/' element={ <Books /> } />
        <Route path='books' element={ <Books /> } />
        <Route path='categories' element={ <Categories />} />
        <Route path='favorites' element={ <Favorites /> } />
        <Route path='create' element={ <Create images={images} categories={categories} />} />
        <Route path="books/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
