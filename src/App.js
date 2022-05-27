import React from "react"
import "./styles/tailwind.output.css";
import "./padco.css";
import { cloneElement } from "react/cjs/react.production.min";

const App = () => {
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
                    <a href="https://www.w3schools.com" >
                      Home
                    </a>
                  </p>
                </td>
                <td>
                  <p className="navi tracking-[3px] font-lato text-[1.3rem]">
                    |
                  </p>
                </td>
                <td>
                  <p className="navi tracking-[3px] font-lato text-[1.3rem]">
                    <a href="https://www.w3schools.com" >
                      PASCO Retrievallle
                    </a>
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
            Welcome to PASCO Entry Portal

          </p>
          <p class="flex-auto align-middle tracking-[2px] font-lato text-[1rem]">
            Please enter given values
          </p>


        </div>
        <div class="pt-[4rem]">
          <div class="h-[7rem] w-[14%] m-auto text-center bg-white pt-[0.6rem] shadow-3xl rounded-[10px]">
            <p>
              Enter Assignment Marks
            </p>
            <p>
              (<a className="text-[#BE0000]">10</a>)
            </p>
            <form className="pt-[0.9rem]">
              <input type="text" id="lname" name="lname" />
            </form>
          </div>

        </div>

        <div className="pt-[4rem]">
          <div>
            <table align="center" className="w-[48%] rounded-[30px]">
              <thead className="text-center">
                <tr>
                  <td>

                  </td>
                  <td class="bg-white text-black border-[1px] border-[#F5F5F5] font-lato h-[4.5rem] pt-[0.5rem]">
                    <p>Enter CA Marks(avg)</p>
                    <p>
                      (<a className="text-[#BE0000]">30</a>)
                    </p>
                  </td>
                  <td class="bg-white text-black border-[1px] border-[#F5F5F5] font-lato h-[4.5rem] pt-[0.5rem]">
                    <p>SEE class(avg)</p>
                    <p>
                      (<a className="text-[#BE0000]">30</a>)
                    </p>
                  </td>
                  <td class="bg-white text-black border-[1px] border-[#F5F5F5] font-lato h-[4.5rem] pt-[0.5rem] rounded-tr-[10px]">
                    <p>Indirect Assessment</p>
                    <p>
                      (<a className="text-[#BE0000]">30</a>)
                    </p>
                  </td>

                </tr>

              </thead>
              <tbody className="text-center">
                <tr>
                  <td class="bg-black text-white border border-[#f5f5f5] font-lato">
                    C01
                  </td>
                  <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>
                  <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>

                   <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>
                </tr>

                <tr>
                  <td class="bg-black text-white border border-[#f5f5f5] font-lato">
                    C02
                  </td>
                  <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>
                  <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>

                   <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>
                </tr>

                <tr>
                  <td class="bg-black text-white border border-[#f5f5f5] font-lato">
                    C03
                  </td>
                  <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>
                  <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>

                   <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>
                </tr>

                <tr>
                  <td class="bg-black text-white border border-[#f5f5f5] font-lato">
                    C04
                  </td>
                  <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>
                  <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>

                   <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>
                </tr>

                <tr>
                  <td class="bg-black text-white border border-[#f5f5f5] font-lato w-[5rem] rounded-bl-[10px]">
                    C05
                  </td>
                  <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>
                  <td>
                    <input type="text1" id="lname" name="lname"/>
                  </td>

                   <td>
                    <input type="text2" id="lname" name="lname"/>
                  </td>
                </tr>


              </tbody>

            </table>
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

export default App;
