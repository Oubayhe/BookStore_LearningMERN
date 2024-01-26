import { useState, useEffect } from 'react'

function App() {
  const [books, setBooks] = useState("")

  useEffect(() => {
    fetch("/books").then(
      res => res.json()
    ).then(data => { setBooks(data) })
  }, [])

  return (
    <div>
      {console.log(books)}
      {(typeof books === 'undefined') ? (
        (<p>Loading...</p>)
      ) : (
        books.map(book  => {
          return(<p key={book.id}>{book.title}</p>)
        })
      )}
    </div>
  )
}

export default App
