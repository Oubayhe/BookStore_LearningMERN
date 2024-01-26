import React from 'react'
import { useState, useEffect } from 'react'

const Books = () => {
    const [books, setBooks] = useState([])
  
  useEffect(() => {
    fetch("/books").then(
      res => res.json()
    ).then(data => { setBooks(data) })
  }, [])

  return (
    <div>
      {/* try to see if you can click on a title and get details of the book */}
      {console.log(books)}
      {(typeof books === 'undefined') ? (
        (<p>Loading...</p>)
      ) : (
        books.map(book  => {
          return(<p key={book._id}>{book.title}</p>)
        })
      )}
    </div>
  )
}

export default Books
