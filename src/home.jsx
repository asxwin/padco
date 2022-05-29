import React from "react";
import "./styles/tailwind.output.css";
import "./padco.css";

// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
      </style>
      
      <nav className="sticky top-0 bg-[#f5f5f5]">
        <table className="table-auto">
          <tbody className="">
            <tr>
              <td className="p-2 pr-4">
                <img src="https://user-images.githubusercontent.com/84399682/170678600-e72ba35d-4e1f-434d-9aa7-e89883d306f5.png" alt="" className="w-[45px]" />
              </td>
              <td>
                <p className="font-lato">PSG College of Technology</p>
                <p className="font-lato text-2xl">PASCO</p>
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="w-[100%] h-[7px] bg-[#c4c4c4]"></hr>
      </nav>


      <div class="w-full h-screen bg-[#F5F5F5] pt-[5rem]">
        <div class="grad" >
          <p class="flex-auto tracking-[4px] font-lato text-[2.5rem] pt-[2.5rem]">
            PASCO Home
          </p>
        </div>
        <Link to="/entry">
        <div class="pt-[7rem]">
          <div class="h-[5.5rem] w-[19%] m-auto text-center bg-[#d7f4f568] pt-[0.6rem] shadow-3xl rounded-[40px]">
          <p class="flex-auto tracking-[4px] font-lato text-[1.7rem] pt-[1rem]">
              Entry
            </p>
        </div>
        

        </div>
        </Link>

        <Link to="/retrieval">
        <div class="pt-[4rem]">
          <div class="h-[5.5rem] w-[19%] m-auto text-center bg-[#d7f4f568] pt-[0.6rem] shadow-3xl rounded-[40px]">
          <p class="flex-auto tracking-[4px] font-lato text-[1.7rem] pt-[1rem]">
              Retrieval
            </p>
        </div>
        

        </div>
        </Link>

        </div>      
      
    </div>
  
  );
};
  
export default Home;