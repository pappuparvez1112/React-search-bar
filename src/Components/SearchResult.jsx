import React from 'react'
import './searchResult.css'
import SearchResultBox from './SearchResultBox';

const SearchResult = ({results}) => {
  return (
    <div className='result_list'>
      {
        results.map((result,id)=>{
         return (
            <SearchResultBox key={id} result={result}/>
         )
        })
      }
      
      
    </div>
    
    
  );
};

export default SearchResult
