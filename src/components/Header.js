import React, {useEffect, useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {toggling} from "../store/toggleSlice";
import {YOUTUBE_SEARCH_API} from "../utils/constants";
import {cacheResults} from "../store/searchSlice";
function Header(props) {
    const [searchQuery , setSearchQuery] = useState('')
  const [ suggestions , setSuggestions] = useState([])
    const [showSuggestions , setShowSuggestions] = useState(false)



    // subscribing to store
    const searchCache = useSelector(store=>store.search)

    // dispatching
    const dispatch = useDispatch()


    // console.log(searchQuery);


    useEffect(() => {
        //implemented debouncing
        //  make an api call after every key press but if the difffrence between 2 Api calls is <200ms then decline api call
  const timer = setTimeout(()=> {
      if(searchCache[searchQuery]){
          setSuggestions(searchCache[searchQuery])
      }else{
          getSearchSuggestions()
      }

  }, 200)

        return () => {
      clearTimeout(timer)
        }
    }, [searchQuery]);


    const getSearchSuggestions = async () =>{
  const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        // console.log(json[1])
        setSuggestions(json[1])

    //     updating my cache

        dispatch(cacheResults({
           [searchQuery]: json[1]
        }))

    }


    function handleClick(){
        dispatch(toggling())
    }

    return (
        <div className="grid grid-flow-col p-4 m-2 gap-3 shadow sticky top-0 bg-white z-10 ">
            {/*hamburger icon and logo section*/}
            <div className="flex gap-2 mt-2 col-span-4">
                <GiHamburgerMenu className="cursor-pointer" size={30} onClick={handleClick}/>
                <FaYoutube className="hidden md:inline-block" size={30}/>
            </div>


            {/* search section */}
            <div className=" p-2 col-span-4 border-2 rounded-lg">
                <div className="flex justify-between">
                    <input onFocus={()=> setShowSuggestions(true)} onBlur={()=> setShowSuggestions(false)}  value={searchQuery} onChange={(e) => {
                        setSearchQuery(e.target.value)
                    }} className="border-none outline-none w-[100%] overflow-hidden text-wrap" placeholder="Search"
                           type="text"/>
                    <FaSearch size={20}/>
                </div>
                {
                 showSuggestions && suggestions.length>0 &&  <div className="fixed bg-white border border-gray mt-4 rounded-lg  drop-shadow-lg py-2  w-44 md:w-64">
                        <ul>
                            {
                                suggestions && suggestions.map((item, index) => {
                                    return <li className="px-5 shadow-sm py-1 hover:bg-gray-200" key={item}>{item}</li>
                                })
                            }
                        </ul>
                    </div>
                }


            </div>


            {/*user icon section*/}
            <div className="col-span-4 mt-2 flex flex-row justify-end">
                <FaUser className="ml-4" size={30}/>
            </div>

        </div>
    );
}

export default Header;