import React from 'react'
import ShowArticles from '../components/showArticles'

const newStories = () => {
  const type = 'new'
  return (
    <ShowArticles type={type}/>
  )
}

export default newStories