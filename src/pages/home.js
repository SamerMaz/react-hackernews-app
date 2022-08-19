import { Pagination } from '@mui/material';
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import Article from '../components/article';
import ShowArticle from '../components/topStories';
import TopStories from '../components/topStories';
import useDataFetcher from '../hooks/dataFetcher'
// import './paginate.css'
// import useParams

const Home = () => {
    // const { type } = useParams();

    const top= 'top'
    const { isLoading, stories } = useDataFetcher(top);

    const [currentPage, setCurrentPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(0);


    const [postsPerPage] = useState(30);
    const [offset, setOffset] = useState(1);
   


    const handlePageChange = (e) => {
      const selectedPage = setCurrentPage(e.selected)
      setOffset(selectedPage + 1)
      console.log(e)
    }


    return (
      <React.Fragment>
        {/* <ShowArticles type={top} 
                      postPerpage={postsPerPage} 
                      offset={offset}
          // count={totalPages}
        /> */}
    <TopStories />
      {/* <div >
      <ReactPaginate
        nextLabel='>>'
        previousLabel='<<'
        breakLabel="..."
        // forcePage={currentPage}
        // pageCount={10}
        pageCount={10}
        renderOnZeroPageCount={null}
        onPageChange={handlePageChange}
        className='pagination'
        activeClassName='active-page'
        previousClassName='previous-page'
        nextClassName='next-page'

      />
      </div> */}
      </React.Fragment>
      
      )
}

export default Home