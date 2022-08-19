import { paginationItemClasses } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useDataFetcher from "../hooks/dataFetcher";
import { getStories, getStory } from "../services/api";
import { BASE_API_URL } from "../utils/constant";
import Article from "./article";
import './paginate.css'
import BottleNeck from 'bottleneck'

    const limiter = new BottleNeck({
      maxConcurrent: 1, 
      minTime: 333
    })

const TopStories = ({ type }) => {
//   const { isLoading, stories } = useDataFetcher(type, postPerpage, offset, pageCount);

  const top= 'top'
//   const { isLoading, stories } = useDataFetcher(top);

  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0);

  const [stories, setStories ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  const [postsPerPage, setPostPerPage] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0)
 

//   const getArticleData = (data) =>(
//     data.map(( article ) => (
        
//         <Article key={article.id} article={article} />
//       ))
//   )

//  const getArticles = async(type, id) =>{
//     try {
//       const { data: storyIds } = await axios.get(
//         `${BASE_API_URL}/${type}stories.json`
//       );
//       const slice = await Promise.all(storyIds.slice(0, offset - 1 + postsPerPage))
       
//       const postData = getArticleData(slice)
//       setStories(postData)
//       setPageCount(Math.ceil(storyIds.length / postsPerPage))
//     //   const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
//     //   return story;
//     } catch (error) {
//       console.log(error)
//     }
//   };

  // useEffect(() => {
  //   getArticles('top')
  // }, [offset])



 


//   useEffect(()=>{
//     setIsLoading(true);
//     getStories(type, offset, postsPerPage)
//         .then((stories)=>{
//             console.log(stories.length, postsPerPage)
//             setStories(stories);
//             setPageCount(Math.ceil(stories.length / postsPerPage))
//             // setCount(count +10)
//             setIsLoading(false);
//         }).catch(()=>{
//             setIsLoading(false);
//         });
// }, [type, offset]);



// const getData = (type) => {
//   // const options = type
//   const API_URL = `https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`;

//   return new Promise((resolve, reject) => {
//     return resolve(axios.get(API_URL))
//   })
// }

// const getIdFromData = (id) => {
//   const API_URL = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
//   return new Promise((resolve, reject) => {
//     return resolve(axios.get(API_URL))
//   })
// }


// const runAsyncFunctions = async (type) => {
//   // setLoading(true)
//   const {data} = await getData(type)
//   let firstTen = data.filter((d,i) => i < 10);

//   Promise.all(
//     firstTen.map(async (d) => {
//       const {data} = await limiter.schedule(() => getIdFromData(d))
//       console.log(data)
//       return data;
//     })
//     )
//     .then((newresults) => setStories((results) => [...results, ...newresults]))

//     // setLoading(false)
//   // make conditional: check if searchBar type has changed, then clear array of results first
// }

// console.log(stories)

//   useEffect(() => {
//     runAsyncFunctions(top)
//   }, [])




// const [cnt, setCount] = useState(0);
// const [pagCount, setPageCount] = useState(pageCount)
// offset, postsPerPage


useEffect(()=>{
    setIsLoading(true);
    getStories(top, offset, postsPerPage)
        .then((stories)=>{
            console.log(stories.length, postsPerPage)
            setStories(stories);
            setPageCount(pageCount +10)

            // setPageCount(Math.ceil(stories.length / postsPerPage))
            // setCount(count +10)
            setIsLoading(false);
        }).catch(()=>{
            setIsLoading(false);
        });
}, [type]);



  const handlePageChange = (e) => {
    const selectedPage = setCurrentPage(e.selected)
    setOffset(selectedPage + 1)
    setPostPerPage(postsPerPage +10)
    console.log(e)
  }



  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {stories.map(({ data: article }) => (
            console.log('sdfasdfasdf', article),
            <Article key={article.id} article={article} />
            // JSON.stringify(story)
          ))}
          {/* {stories.map()} */}
        </React.Fragment>
      )}


<div >
      <ReactPaginate
        nextLabel='>>'
        previousLabel='<<'
        breakLabel="..."
        // forcePage={currentPage}
        // pageCount={10}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        onPageChange={handlePageChange}
        className='pagination'
        activeClassName='active-page'
        previousClassName='previous-page'
        nextClassName='next-page'

      />
      </div>


    </React.Fragment>
  );
};

export default TopStories;
