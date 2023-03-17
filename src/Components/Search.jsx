import React, { useState } from 'react'
import './search.css'
import {FaSearch} from "react-icons/fa"

const Search = ({setResults}) => {
    const [input,setInput]=useState("");
   const fetchData=(value)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((json)=>{
        const results=json.filter((user)=>{
            return(
                value &&
                user &&
                user.name &&
                user.name.toLowerCase()
                .includes(value)
            );
        });
        setResults(results);
    });
   };

   const handleChange=(value)=>{
    setInput(value);
    fetchData(value);
   }
  return (
    <div className="input_wrapper">
        <FaSearch id='search_icon'/>
        <input placeholder='type to search' value={input} onChange={(e)=>handleChange(e.target.value)}/>
    </div>
  )
}

export default Search
