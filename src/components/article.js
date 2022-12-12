"use strict"
import { Card } from '@mui/material'
import React from 'react'
// import { Link }  from 'react-router-dom'
import { timeDifference } from '../utils/timeDifference'
import arrow from '../assets/Images/noun-up-arrow-341245.png'

const Link = ({url, title}) =>(
  <a href={url} target="_blank" rel='noreferrer'>
    {title}
  </a>
)



const Article = ({article:{id, by, title, kids, time, url, score, type}}) => {

  
  // const domain = (new URL(url)).hostname.replace('www.','');

  return (
    
    <Card sx={{m:4, width:'70%', bgcolor:'orange'}}>
    <div className="story-title">
      <span >
      <a href={`https://news.ycombinator.com/vote?id=${id}&how=up&goto=${type}`}>
        <img src={arrow} alt='uparrow' style={{display:'inline-block', width:'1.5rem',}}/>
      </a>
      </span>
      
      <Link url={url} title={title} />
      &nbsp;
      {/* (
      <span>
        <a href={url}>{domain}</a>
      </span>) */}
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
      </span>
      {type !=='job' ?
      <span>|
         
        <Link
          url={`https://news.ycombinator.com/item?id=${id}`}
          title={`${kids && kids?.length > 0 ? kids?.length + ' comments' : 'discuss'}`}
        /></span>: null}
    </div>
  </Card>
  )
}

export default Article