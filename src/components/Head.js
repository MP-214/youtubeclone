import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { toggleMenu } from "../utils/appSlice";
import { addCache } from "../utils/cacheSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

/**
 * Humburger MenuIcon
 * Youtube Icon
 * SearchBar with icon
 * user icon
 */
const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion ,setShowSuggestion]=useState(false)


  const dispatch = useDispatch()
  const searchCache=useSelector((state)=>state.cache)
  console.log(searchCache)
  //applying debouncing
  useEffect(() => {
    
    const timer = setTimeout(() => {
      if(searchCache[searchText]){
        setSuggestions(searchCache[searchText])
      }
      else{
        searchApi();
      }
      
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const searchApi = async () => {
    const resp = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await resp.json();
   dispatch(addCache({
    [searchText]:json[1]
   }))

    setSuggestions(json[1]);
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={()=>dispatch(toggleMenu())}
          className="h-8 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
        />
        <img
          className="h-8 mx-2"
          src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg"
          alt="youtubeicon"
        />
      </div>
      <div className="col-span-10">
      <div>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}
          className="px-5 w-1/2 border border-gray-400 rounded-l-full"
          type="text"
          placeholder="search"
          value={searchText}
        />
        <button className=" px-5  border  border-gray-400 bg-gray rounded-r-full">
          🔍
        </button>
        </div>
       {showSuggestion &&   <ul className="fixed my-2 border bg-white rounded w-1/2 shadow-lg">
        {suggestions.map((suggestion)=>{
          return <li className="p-2 pl-5 font-bold">{suggestion}</li>
        })}
        
    
        </ul>}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
