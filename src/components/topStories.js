import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getStories, getStroyIDS } from "../services/api";
import Article from "./article";
import './paginate.css';



const TopStories = ({ type }) => {

  const top= 'top'

  const [currentPage, setCurrentPage] = useState(1); 

  const [stories, setStories ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  const [postsPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(1)
 




useEffect(()=>{
    setIsLoading(true);

    getStories(top, currentPage, postsPerPage)
        .then((stories)=>{

            setStories(stories)

            setIsLoading(false);

            console.log(currentPage, stories)
        }).catch((error)=>{
          console.log(error)
        });

getStroyIDS(top).then((stroy)=>{
  setPageCount(Math.ceil((stroy.length) / postsPerPage))

})

}, [currentPage,postsPerPage]);


  const handlePageChange = (e) => {
    const selectedPage =(e.selected)
    // setCurrentPage((x)=>x + selectedPage)
    setCurrentPage(selectedPage + 1)
    // setPage((prevState) => prevState - 1)
    // setPostPerPage(postsPerPage)
    // setPageCount(pageCount)

    console.log(selectedPage)
  }


  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {stories.map(({ data: article }) => (
            // stories &&
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
        pageRangeDisplayed={5}
        // totalCount={}
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
