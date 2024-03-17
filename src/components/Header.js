import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
function Header(props) {
    return (
        <div className="grid grid-flow-col p-4 m-2 shadow">
            {/*hamburger icon and logo section*/}
            <div className="flex gap-2 mt-2 col-span-4">
                <GiHamburgerMenu size={30} />
                <FaYoutube size={30} />
            </div>




            {/* search section */}
            <div className="flex justify-between p-2 col-span-4 border-2 rounded-lg">
                <input className="border-none outline-none w-[100%] overflow-hidden text-wrap" placeholder="Search" type="text"/>
                <FaSearch  size={20} />
            </div>



            {/*user icon section*/}
            <div className="col-span-4 mt-2 flex flex-row justify-end">
                <FaUser className="ml-4" size={30}/>
            </div>

        </div>
    );
}

export default Header;