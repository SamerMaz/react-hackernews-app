import { Card } from '@mui/material'
import React from 'react'
import { timeDifference } from '../utils/timeDifference'

const Link = ({url, title}) =>(
  <a href={url} target="_blank" rel='noreferrer'>
    {title}
  </a>
)

const Article = ({article:{id, by, title, kids, time, url, score}}) => {
  return (
    
    <Card className="story">
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
        {/* {new Date(time * 1000).toLocaleDateString('en-US', {
          hour: 'numeric',
          minute: 'numeric'
        })} */}
        {timeDifference(time)}
      </span>|
      <span>
        <Link
          url={`https://news.ycombinator.com/item?id=${id}`}
          title={`${kids && kids.length > 0 ? kids.length + ' comments' : 'discuss'}`}
        />
      </span>
    </div>
  </Card>
  )
}

export default Article