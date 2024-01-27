import React from 'react'

const Create = ({ images, categories }) => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const response = await fetch('/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Book Title: </label>
        <input type="text" name="title" id="title" required />
        <label htmlFor="snippet">Book Snippet: </label>
        <input type="text" name="snippet" id="snippet" required />
        <label htmlFor="image">Book Cover: </label>
        <select name="image" id="image" required>
          {images.length > 0 &&
            images.map((image, i) => {
              return <option key={i}>{image}</option>;
            })}
        </select>
        <label htmlFor="category">Book Category: </label>
        <select name="category" id="category" required>
          {categories.length > 0 &&
            categories.map((category, i) => {
              return <option key={i}>{category}</option>;
            })}
        </select>
        <label htmlFor="body">Book Body: </label>
        <textarea name="body" id="body" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
