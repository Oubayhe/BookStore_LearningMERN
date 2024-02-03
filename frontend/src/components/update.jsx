import React from 'react'
import { useParams } from 'react-router-dom'

const Update = ({ images, categories }) => {
    const { id } = useParams()

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
      
        const formData = {
          title: event.target.elements.title.value,
          snippet: event.target.elements.snippet.value,
          image: event.target.elements.image.value,
          category: event.target.elements.category.value,
          body: event.target.elements.body.value
        };
      
        try {
          const response = await fetch(`${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            // Handle successful form submission, e.g., redirect the user
            window.location.href = '/books';
          } else {
            console.error('Failed to submit form');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
      

  return (
    <div className="content create-book">
        <form className="update form" onSubmit={handleSubmit}>
            <label for="title">Book Title: </label>
            <input type="text" name="title" id="title" required />
            <label for="snippet">Book Snippet: </label>
            <input type="text" name="snippet" id="snippet" required />
            <label for="image">Book Cover: </label>
            <select name="image" id="image" required>
                { images.length > 0 && 
                    images.map((image, i) => {
                        return( <option key={i}>{image}</option> )
                    })
                }
            </select>
            <label for="category">Book Category: </label>
            <select name="category" id="category" required>
                { categories.length > 0 && 
                    categories.map((category, i) => {
                        return( <option key={i}>{category}</option>)
                    })  
                }
            </select>
            <label for="body">Book Body: </label>
            <textarea name="body" id="body" required></textarea>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default Update
