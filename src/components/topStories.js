import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getStories } from "../services/api";
import Article from "./article";
import './paginate.css';



const TopStories = ({ type }) => {

  const top= 'top'

  const [currentPage, setCurrentPage] = useState(1); 

  const [stories, setStories ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  const [postsPerPage, setPostPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)
 




useEffect(()=>{
    setIsLoading(true);
    getStories(top, currentPage, postsPerPage)
        .then((stories)=>{
            setStories(stories)
            setPageCount(Math.ceil(stories.length / postsPerPage))
            setIsLoading(false);
        }).catch(()=>{
            setIsLoading(false);
        });
}, [type, currentPage,]);


  const handlePageChange = (e) => {
    const selectedPage = setCurrentPage(e.selected)
    setCurrentPage(selectedPage + 1)
    // setPostPerPage(postsPerPage)
    // setPageCount(pageCount)
    setPageCount(Math.ceil(stories.length / postsPerPage))

    console.log(e)
  }


  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {stories.map(({ data: article }) => (
            // console.log('sdfasdfasdf', article),
            <Article key={article.id} article={article} />
            // JSON.stringify(story)
          ))}
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
