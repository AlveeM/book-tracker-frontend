import React, { useState, useEffect } from 'react'

export default function AuthorContainer() {
  const [authors, setAuthors] = useState([]);
  const authorsList = authors.map(author => <li>{author.name}</li>);

  useEffect(() => {
    fetch('http://localhost:9393/authors')
      .then(r => r.json())
      .then(authorsRes => setAuthors(authorsRes));
  }, [])

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authorsList}
      </ul>
    </div>
  )
}
