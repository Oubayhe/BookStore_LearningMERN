import { useState, useEffect } from 'react'
import Footer from './components/footer'
import TopBar from './components/topBar'

// Routes in React
import { Routes, Route } from 'react-router-dom'

function App() {
  const [books, setBooks] = useState("")
  
  useEffect(() => {
    fetch("/books").then(
      res => res.json()
    ).then(data => { setBooks(data) })
  }, [])

  return (
    <div>
      {/* <TopBar /> */}
      {/* try to see if you can click on a title and get details of the book */}
      {console.log(books)}
      {/* {(typeof books === 'undefined') ? (
        (<p>Loading...</p>)
      ) : (
        books.map(book  => {
          return(<p key={book.id}>{book.title}</p>)
        })
      )} */}
      {/* Test the Routes over here */}
      <Routes>
        <Route path='/' element={ <Footer /> } />
        <Route path='topbar' element={ <topBar /> } />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
