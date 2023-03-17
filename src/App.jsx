
import { useState } from 'react'
import './App.css'
import Search from './Components/Search'
import SearchResult from './Components/SearchResult';







function App() {
   const [results,setResults]=useState([]);
 

  return (
    <div className="App">
      <div className="search_bar_container">
      
       <Search setResults={setResults}/>
        <SearchResult results={results}/>

       

      </div>
    </div>
  )
}

export default App
