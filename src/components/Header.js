import React from "react";
import { IoHelpCircle, IoCloseCircle, IoSettingsSharp } from 'react-icons/io5'

function Header() {
    return (
        <nav className="flex justify-between py-8 bg-gray-100">
            <p className="ml-[400px] text-md font-bold">TOP RATED TOURIST ATTRACTIONS IN SINGAPORE</p>
            <div className="flex mr-8">
            <IoCloseCircle size={30} className="text-gray-500 mr-2" />
            <IoHelpCircle size={30} className="text-gray-500 mr-2" />
            <IoSettingsSharp size={28} className="text-gray-500" />
            </div>
            
        </nav>
    )
}

export default Header;