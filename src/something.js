import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Something = () => {
  const [article, setArticles] = useState()

  const fetchData = async () => {
    const res = axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')

    return res.data
  }

  useEffect(() => {
    // const res = await fetchData()
    // console.log(res)
  }, [])

  return (
    <div>
      <h1>Something Important</h1>
    </div>
  )
}

export default Something
