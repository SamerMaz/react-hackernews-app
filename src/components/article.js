import { Card } from '@mui/material'
import React from 'react'
import { timeDifference } from '../utils/timeDifference'

const Link = ({url, title}) =>(
  <a href={url} target="_blank" rel='noreferrer'>
    {title}
  </a>
)

const Article = ({article:{id, by, title, kids, time, url, score}, type}) => {
  return (
    
    <Card sx={{m:4, width:'70%', bgcolor:'orange'}}>
    <div className="story-title">
      <Link url={url} title={title} />
    </div>
    <div className="story-info">
    <span>
        {`${score} points `}
      </span>
      <span>
        by{' '}
        <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
      </span>
      |<span>

        {timeDifference(time)}
      </span>|
      <span>
        {(type === 'top' || 'new') ? 
        <Link
          url={`https://news.ycombinator.com/item?id=${id}`}
          title={`${kids && kids?.length > 0 ? kids?.length + ' comments' : 'discuss'}`}
        />: null}
      </span>
    </div>
  </Card>
  )
}

export default Article