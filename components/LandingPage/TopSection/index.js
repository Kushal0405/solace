import React, { Component } from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container'
import { BsSearch } from "react-icons/bs";
import { TiDownload } from "react-icons/ti";
import Grid from '@material-ui/core/Grid';


export default class TopSection extends Component {
  render() {    

        const brand ={
    fontFamily: "open-sans",
    fontWeight: 600,
    color: '#00C895',
}
    
    return (
      <React.Fragment >
        <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        </Head>
        <div style={{background:'#212527'}}>
        <Container >
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
            <ul className=" navbar-nav navbar-right ml-auto " >
                    <li className="nav-item">
                        <a className="nav-link text-light pr-4"style={{fontWeight:'500'}} href="#">Docs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light pr-4 "style={{fontWeight:'500'}} href="#">Resources</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link text-light pr-4 "style={{fontWeight:'500'}} href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link text-light pr-4 "style={{fontWeight:'500'}} href="#">Learn</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link text-light pr-4" style={{fontWeight:'500'}} href="#">Downloads</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link text-light pr-4 " style={{fontWeight:'500'}} href="#">Support</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link text-light pr-4" style={{fontWeight:'500'}} href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link text-light pr-4" style={{fontWeight:'500'}} href="#">Login</a>
                    </li>
                    <li className="nav-item">
                       <span  className="text-light mt-2 pr-4 "><BsSearch/></span> 
                    </li>
                 </ul>
              
            </div>
            </nav>
      
            <br></br>
         <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <img className="navbar-brand" src="https://cdn.solace.com/wp-content/themes/orbit-media/resources/images/solace-logo-white.png" width="260px" height="70px" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item pr-3 ">
                    <a style={{fontSize:'20px'}} className="nav-link text-light" href="#">Products</a>
                </li>
                <li className="nav-item pr-3">
                    <a style={{fontSize:'20px'}} className="nav-link text-light " href="#">Use Cases</a>
                </li>
                <li className="nav-item pr-3">
                    <a  style={{fontSize:'20px'}} className="nav-link text-light" href="#">Solace With</a>
                </li>
                <li className="nav-item pr-3">
                    <a style={{fontSize:'20px'}} className="nav-link text-light" href="#">Company</a>
                </li>
                <li className="nav-item pr-3">
                    <a style={{fontSize:'20px'}} className="nav-link text-light" href="#">Developers</a>
                </li>
                <li className="nav-item pr-3">
                <a className="text-light btn btn-outline-light  "style={{fontWeight:'700',borderRadius:'40px', fontSize:'20px'}} href="#">Get pubSub+ for free</a>
                </li>
                </ul>
            </div>
            </nav>
       </Container>
        <div className="container">
        <div  className="mt-5 pb-5 row" >
        <div className="col-md-6 col-sm-12" item xs={6}>
         <h1 style={{color:'#00C895', fontSize:'50px', fontWeight:'600', fontFamily:'open-sans'}}>Building the digital backbone for real-time enterprises.</h1>
         <h3 style={{color:'white',  fontSize:'32px', fontWeight:'400', fontFamily:'open-sans',marginTop:'30px'}}>Everything you need to get your business events streaming on an <abbr title="think of it as modern messaging middleware">event mesh,</abbr> plus what you need to discover, manage and govern them.</h3>
         <h5  style={{color:'white', marginTop:'10px'}} className="mt-5"><span style={{color:'#00C895'}}><TiDownload/></span>Download FREE production-ready software</h5>
        </div>
        <div className="col-md-6 col-sm-12" item xs={6}>
        <div className="card  w-100">
            <img className="card-img-top" src='https://play.vidyard.com/gJ2pSxSS9Ad3jpxaT2Q7Ly.jpg' alt="Card image cap"/>
              </div> 
              <a className="text-light btn btn-outline-success mt-5 "style={{marginLeft:'125px',borderRadius:'40px'}} href="#">Request an event mesh demo</a>

        </div>
        </div>
        </div>
        </div>
      </React.Fragment>
    )
  }
}
