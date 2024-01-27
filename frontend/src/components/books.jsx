import React from 'react'
import { useState, useEffect } from 'react'
import DisplayBook from './partials/DisplayBook'

const Books = () => {
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    fetch("/books").then(
      res => res.json()
    ).then(data => { setBooks(data) })
  }, [])

  // Delete function
  function deleteBook(bookId) {
    const endpoint = `/books/delete/${bookId}`;

    fetch(endpoint, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => window.location.href = data.redirect)
    .catch(err => console.log(err));
  }

  
  return (
    <div>
      {/* try to see if you can click on a title and get details of the book */}
      {/* {console.log(books)} */}
      {/* DISPLAY THE IMAGE, TITLE AND SNIPPET */}
      {(typeof books === 'undefined') ? (
        (<p>Loading...</p>)
      ) : (
        books.map(book  => {
          return(
            <DisplayBook key={book._id} book={ book } deleteBook={deleteBook}/>
          )
        })
      )}
    </div>
  )
}

export default Books
