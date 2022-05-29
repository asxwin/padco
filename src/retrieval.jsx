import React from "react"
import "./styles/tailwind.output.css";
import "./padco.css";
import { cloneElement } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

const Retrieval = () => {
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
        <div className="sticky top-[3rem] m-auto w-1/2 bg-[#0000000c] rounded-bl-lg rounded-br-lg shadow-4xl">
          <table align="center">
            <tbody>
              <tr>
                <td>
                  <p className="navi tracking-[3px] font-lato text-[1.3rem] transition-colors">
                    <Link to="/">
                      Home
                    </Link>
                  </p>
                </td>
                <td>
                  <p className="navi tracking-[3px] font-lato text-[1.3rem]">
                    |
                  </p>
                </td>
                <td>
                  <p className="navi tracking-[3px] font-lato text-[1.3rem]">
                    <Link to="/entry">
                      PASCO Entry
                    </Link>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </nav>


      <div class="w-full h-screen bg-[#F5F5F5] pt-[4rem]">
        <div class="grad" >
          <p class="flex-auto align-middle tracking-[4px] font-lato text-[2.5rem] pt-[2rem]">
            Welcome to PASCO Retrieval
          </p>
          <p class="flex-auto align-middle tracking-[2px] font-lato text-[1rem]">
            Please enter given values
          </p>
        </div>
        <div class="pt-[7rem]">
          <div class="h-[5.5rem] w-[25%] m-auto text-center bg-[#d7f4f568] pt-[0.6rem] shadow-3xl rounded-[40px]">
          <p class="flex-auto tracking-[3px] font-lato text-[1.3rem] pt-[1.2rem]">
              Enter Date From : 
              <input type="date" class="bg-[#d7f4f568] font-lato tracking-[4px] text-[#c12525]" id="date-object"/>
            </p>
        </div>
        

        </div>
    
        <div class="pt-[4rem]">
          <div class="h-[5.5rem] w-[25%] m-auto text-center bg-[#d7f4f568] pt-[0.6rem] shadow-3xl rounded-[40px]">
            <p class="flex-auto tracking-[3px] font-lato text-[1.3rem] pt-[1.2rem]">
              Enter Date To : 
              <input type="date" class="bg-[#d7f4f568] font-lato tracking-[4px] text-[#c12525]" id="date-object"/>
            </p>
          </div>
        </div>

        <div class="pt-[4rem]">
              <div align="center">
                  <button class="button1">
                        SUBMIT
                  </button>
              </div>
        </div>
        </div>

        
    </div>
    );
};

export default Retrieval;