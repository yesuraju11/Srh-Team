import React from 'react'
import { Link, redirect } from 'react-router-dom'


function NavigationBar() {
  return (
    <div>
      <nav class="navbar sticky-top navbar-light bg-light p-0">
      <div class="container-fluid navigation d-flex justify-content-evenly">
       <a class="navbar-brand" href="#">
      <img src='https://www.iplt20.com/assets/images/ipl-logo-new-old.png' alt="img" width={"70px"} height={"70px"} class="d-inline-block align-text-top "></img>
    </a>
    <div>
      <img src='https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png' width={"90px"} height={"90px"} alt='logo'></img>
    </div>
    <div>
      <Link to={"/"} class="navbtn">Team</Link>
      <button class="navbtn"><Link to={"/players"} class="navbtn">Plaers</Link></button>
      <span class="ms-2 text-info fs-3">SEASON 2024</span>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavigationBar