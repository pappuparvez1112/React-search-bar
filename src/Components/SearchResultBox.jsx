import React from 'react'
import './searchResultBox.css'

const SearchResultBox = ({result}) => {
  return (
    <div 
    className='search_result'
    onClick={(e)=>alert(`you clicked on ${result.name}`)}
    >
        {result.name}
      
    </div>
  )
}

export default SearchResultBox
