import React from 'react'
import NavigationBar from "../Components/NavigationBar";
import Footers from "../Components/Footers";
import Footer2 from "../Components/Footer2";

function Player9() {
  return (
    <div class="bg1-secondary">
      <NavigationBar/>
        <div class="playerBg mt-5">
          <section class="secPlay">
          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/1944.png' class=""alt="..." width={"200px"} height={"200px"} ></img>
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
                                    <th scope="row">2023</th>
                                    <td>Nitish Kumar Reddy</td>
                                    <td>All-Rounder</td>
                                    <td>15</td>
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

export default Player9