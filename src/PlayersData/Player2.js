import React from 'react'
import NavigationBar from "../Components/NavigationBar";
import Footers from "../Components/Footers";
import Footer2 from "../Components/Footer2";

function Player2() {
  return (
    <div class="bg1-secondary">
      <NavigationBar/>
        <div class="playerBg mt-5">
          <section class="secPlay">
          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/15.png' class=""alt="..." width={"200px"} height={"200px"} ></img>
          </section>
                <section class="">

                            <table class="table  mt-5">
                                <thead class="bg-dark text-light">
                                  <tr>
                                    <th scope="col">IPL Debut</th>
                                    <th scope="col">Player Name</th>
                                    <th scope="col">Specialization</th>
                                    <th scope="col">Matches</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">2021</th>
                                    <td>Bhuvneshwar Kumar</td>
                                    <td>Bowler</td>
                                    <td>176</td>
                                  </tr>
                                 
                                </tbody>
                              </table>
               </section>
        </div>
        <Footers/>
        <Footer2/>

    </div>
  )
}

export default Player2