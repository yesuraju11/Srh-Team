import React from 'react'
import NavigationBar from './NavigationBar'
import Footers from './Footers'
import Footer2 from './Footer2';
import { Link } from "react-router-dom";


function Players() {

  return (
    <div>
        <NavigationBar />
        <div class="section-1">
          <div class="container">
            <div class="row justify-content-center ">
                  <div class="col-lg-4 col-md-6">
                    <div class="info d-flex align-items-center">
                        <img src='https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png' alt="logo" width={"200px"} height={"200px"} ></img>
                        <h1 class="text-white fw-bold ">Sunrisers <br></br>Hyderabad <img src='https://www.iplt20.com/assets/images/team-trophy.png' alt='logo' class="m-2"></img>
                        <span>2016</span></h1>
                      
                    </div>

                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="info-1">
                      <div class="card">
                        <div class="card-body">
                          <table class="table table-hover text-light">
                            <tr>
                              <td class="td-1">Owner</td>
                              <td>-</td>
                              <td>Sun Tv</td>
                            </tr>
                            <tr>
                              <td class="td-1">Coach</td>
                              <td>-</td>
                              <td> Daniel Vettori</td>
                            </tr>
                            <tr>
                              <td class="td-1"> Venue</td>
                              <td>-</td>
                              <td> Rajiv Gandhi Intl. Cricket Stadium</td>
                            </tr>
                            <tr>
                            <td class="td-1">Captain</td>
                              <td>-</td>
                              <td>Pat Cummins</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                </div>
            </div>

          </div>

        </div>

        {/* team players list  */}
        <div class="container">
          <div class="row">
                    <div class="col-md-6 ">
                      <div class="card m-2 cord-hover">
                        <div class="card-body d-flex align-items-center ">
                          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/525.png' width={"50px"}alt='img1'></img>
                          <span>Abdul Samad</span>
                          <div class="container d-flex justify-content-end">
                            <Link to={"/player1"}> <span class="profile">Profile</span></Link>
                          
                          

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card m-2 cord-hover">
                        <div class="card-body d-flex align-items-center">
                          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/15.png' width={"50px"}alt='img1'></img>
                          <span>Bhuvneshwar Kumar</span>
                          <div class="container d-flex justify-content-end">

                          <Link to={"/player2"}><span class="profile">Profile</span></Link>
                              
                      </div>
                      </div>
                    </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card m-2 cord-hover">
                        <div class="card-body d-flex align-items-center">
                          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/37.png' width={"50px"}alt='img1'></img>
                          <span>Travis Head</span>
                          <div class="container d-flex justify-content-end">
                          <Link to={"/player3"}> <span class="profile">Profile</span></Link>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card m-2 cord-hover">
                        <div class="card-body d-flex align-items-center">
                          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/55.png' width={"50px"}alt='img1'></img>
                          <span>Mayank Agarwal</span>
                          <div class="container d-flex justify-content-end">
                          <Link to={"/player4"}> <span class="profile">Profile</span></Link>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card m-2 cord-hover">
                        <div class="card-body d-flex align-items-center">
                          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/287.png' width={"50px"}alt='img1'></img>
                          <span>Aiden Markram</span>
                          <div class="container d-flex justify-content-end">
                          <Link to={"/player5"}> <span class="profile">Profile</span></Link>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card m-2 cord-hover">
                        <div class="card-body d-flex align-items-center">
                          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/212.png' width={"50px"}alt='img1'></img>
                          <span>Abhishek Sharma</span>
                          <div class="container d-flex justify-content-end">
                          <Link to={"/player6"}> <span class="profile">Profile</span></Link>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card m-2 cord-hover">
                        <div class="card-body d-flex align-items-center">
                          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/224.png' width={"50px"}alt='img1'></img>
                          <span>T. Natarajan</span>
                          <div class="container d-flex justify-content-end">
                          <Link to={"/player7"} class="link"> <span class="profile">Profile</span></Link>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card m-2 cord-hover">
                        <div class="card-body d-flex align-items-center">
                          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/33.png' width={"50px"}alt='img1'></img>
                          <span>Pat Cummins</span>
                          <div class="container d-flex justify-content-end">
                          <Link to={"/player8"}> <span class="profile">Profile</span></Link>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card m-2 cord-hover">
                        <div class="card-body d-flex align-items-center">
                          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/1944.png' width={"50px"}alt='img1'></img>
                          <span>Nitish Kumar Reddy</span>
                          <div class="container d-flex justify-content-end">
                          <Link to={"/player9"}> <span class="profile">Profile</span></Link>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-md-6 ">
                      <div class="card m-2 cord-hover">
                        <div class="card-body d-flex align-items-center">
                          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/202.png' width={"50px"}alt='img1'></img>
                          <span>Heinrich Klaasen</span>
                          <div class="container d-flex justify-content-end">
                          <Link to={"/player10"}> <span class="profile">Profile</span></Link>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card m-2 cord-hover">
                        <div class="card-body d-flex align-items-center">
                          <img src='https://documents.iplt20.com/ipl/IPLHeadshot2024/523.png' width={"50px"}alt='img1'></img>
                          <span>Shahbaz Ahamad</span>
                          <div class="container d-flex justify-content-end">
                          <Link to={"/player11"}> <span class="profile">Profile</span></Link>
                          </div>
                      </div>
                      </div>
                    </div>
          </div>
        
                  
        </div>

        
  
        

        {/* Footer */}
        <Footers/>
        <Footer2/>
        
   
    
    </div>
  )
}

export default Players