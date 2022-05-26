import React from "react";
import { GoGlobe } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";
import sgp from "../images/Attraction.png";
import vid from "../images/Video.png";
import blog from "../images/Blog.png";
import about from "../images/About.png";

function Sidebar({ activeMenu }) {
  const [am, setAM] = activeMenu;
  return (
    // Navbar 1

    <div class="absolute z-10">
      <aside className="h-screen w-28 bg-[#313541] overflow-auto">
        <div className="hover:bg-[#72CDD2] p-6">
          <span className="flex text-md text-gray-500 font-normal justify-center items-center">
            <GoGlobe size={35} className="text-[#8198A0] hover:text-white" />
          </span>
          <p className="text-[#8198A0] text-xs">Browse</p>
        </div>
        <div className="hover:bg-[#72CDD2] p-4 border-b-[0.8px] border-t-[0.8px] border-gray-800">
          <span className="flex text-md text-gray-500 font-normal justify-center items-center">
            <img src={sgp} alt="sg" width={35} className="hover:text-white" />
          </span>
          <p className="text-xs text-[#8198A0]">Suggest Attraction</p>
        </div>
        <div className="hover:bg-[#72CDD2] p-4 border-b-[0.8px] border-gray-800">
          <span className="flex text-md text-gray-500 font-normal justify-center items-center">
            <img src={vid} alt="sg" width={35} className="hover:text-white" />
          </span>
          <p className="text-xs text-[#8198A0]">Videos</p>
        </div>
        <div className="hover:bg-[#72CDD2] p-4 border-b-[0.8px] border-gray-800">
          <span className="flex text-md text-gray-500 font-normal justify-center items-center">
            <img src={blog} alt="sg" width={35} className="hover:text-white" />
          </span>
          <p className="text-xs text-[#8198A0]">Blog</p>
        </div>
        <div className="hover:bg-[#72CDD2] p-4 border-b-[0.8px] border-gray-800">
          <span className="flex text-md text-gray-500 font-normal justify-center items-center">
            <img src={about} alt="sg" width={35} className="hover:text-white" />
          </span>
          <p className="text-xs text-[#8198A0]">About</p>
        </div>
      </aside>

      {/* Navbar 2 */}

      <aside className="absolute ml-28 w-[250px] h-full top-0 bg-[#282c37]">
        <div className="flex justify-between mt-10 mx-5 py-1 px-4 border border-[#242833]">
          <span className="text-sm font-semibold text-[#8198A0]">
            Filter by favorite
          </span>
          <span className="pt-[2px] text-gray-200">
            <MdArrowDropDown />
          </span>
        </div>
        {[
          "Merlion",
          "Marina Bay Sands",
          "Gardens by The Bay",
          "Chinatown",
          "Asian Civilisations Museum",
          "Clarke Quay",
          "Fort Canning Park",
          "Singapore Flyer",
          "Orchard Road",
        ].map((name) => {
          return name === am ? (
            <div
              onClick={() => setAM(name)}
              className="flex mt-[20px] mx-5 py-2 px-4 cursor-pointer border-b-[1.5px] border-t-[1.5px] border-[#242833] bg-[#1C1F28]"
            >
              <span className="text-sm font-semibold text-[#92D72D]">
                {name}
              </span>
            </div>
          ) : (
            <div
              onClick={() => setAM(name)}
              className="flex mt-[20px] mx-5 py-2 px-4 cursor-pointer border-b-[1.5px] border-t-[1.5px] border-[#242833] "
            >
              <span className="text-sm font-semibold text-white">{name}</span>
            </div>
          );
        })}
      </aside>
    </div>
  );
}

export default Sidebar;
