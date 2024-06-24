import React from 'react'

function Sliding() {
  return (
    <div class="sliding-pics">
    <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src='https://cdn-wp.thesportsrush.com/2023/05/5e0ebe6c-untitled-design-15.jpg?format=auto&w=3840&q=75' class="d-block w-100 sliding-pics" alt="..." ></img>
    </div>
    <div class="carousel-item">
      <img src='https://pbs.twimg.com/media/FtStNHXacAAvC8r.jpg:large' class="d-block w-100 sliding-pics" alt="..." ></img>
    </div>
    <div class="carousel-item">
      <img src='https://sportscafe.in/img/es3/articles/Cricket_1/SRH-with-trophy-BCCI.jpg' class="d-block w-100 sliding-pics" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Sliding