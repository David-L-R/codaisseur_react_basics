import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Something = () => {
  const [articles, setArticles] = useState([])

  const fetchData = async () => {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    )

    console.log(res.data)
    setArticles(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Something Important</h1>
      {articles.map((article, index) => (
        <p key={article.id}>{article.title}</p>
      ))}
    </div>
  )
}

export default Something
