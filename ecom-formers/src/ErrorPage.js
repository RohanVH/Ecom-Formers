import React from 'react'
import './css/errorpage.css';
import { Link } from 'react-router-dom'; 
const ErrorPage = () => {
  return (
    <div>

        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Arvo' ></link>
        <section class="page_404">
            <div class="container-fluid">
                
                <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
                
               
                </div>
                
                <div class="contant_box_404">
                <h3 class="h2">
                Look like you're lost
                </h3>
                
                
                <p>the page you are looking for not avaible!</p>
                
                
                
                    <Link to='/'><span class="link_404">Go to Home</span></Link>
                
                    
            </div>
                
            </div>
        </section>
    </div>
  )
}

export default ErrorPage