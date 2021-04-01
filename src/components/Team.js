import { Carousel } from "react-bootstrap";
import React, { Component } from 'react';
import "../css/team.css";
var ReactDOM = require('react-dom');

export default class team extends Component{
render(){
    return(
<div>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light">Our team</h2>
        <p class="font-italic text-muted">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
      </div>
    </div>

    <div class="row text-center">
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://avatars.githubusercontent.com/u/73034160?v=4" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Shivani Sharma</h5><span class="small text-uppercase text-muted">Front-end Developer</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="linkedin.com/in/shivani-sharma-a8957b181" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://media-exp1.licdn.com/dms/image/C5603AQG2Y9Ws77-35A/profile-displayphoto-shrink_400_400/0/1616695664642?e=1622678400&v=beta&t=vGjRvfWDo9-_-LCr-u2idbtWJH-Jt508pP7HuTGXRCI" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Neelkanth Dabhi</h5><span class="small text-uppercase text-muted">Full Stack Developer</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
     
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://avatars.githubusercontent.com/u/36657936?v=4" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">Harpreet Singh Sodhi</h5><span class="small text-uppercase text-muted">Full Stack Developer</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://media-exp1.licdn.com/dms/image/C5603AQFUZTVC0FIIrw/profile-displayphoto-shrink_400_400/0/1517543339374?e=1622678400&v=beta&t=Hd0JvQC75d4iEGnTaLZ_-Q922AZ5xS05eVAdIuPZS1Y" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 class="mb-0">Rajveen Singh </h5><span class="small text-uppercase text-muted">Back-end Developer</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>

    </div>
  </div>

</div>
        )
    }
}
