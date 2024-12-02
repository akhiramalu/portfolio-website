import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import img1 from '../components/IMAGE/malu1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md'; // Import mail icon
import '../components/sheet.js'


const Contact = () => {
  return (


<div class="container-fluid">
              <br /><br />
  <div class="row">
            <div class="col-lg-4">
                <div class="card9" >
                      <div class="scroll-element">
                        <img src={img1}   class="rounded-circle" width="160"/>
                        
                        <h2 style={{ marginTop: '30px' }} >Call me</h2>
                        < FiPhoneCall size={30} color="blue"/>
                        <h5 style={{ marginTop: '30px' }}>9645985479</h5>
                        
                        <h2 style={{ marginTop: '50px' }}> Email</h2>
                        <MdEmail size={30} color="blue" />
                        <h5 style={{ marginTop: '30px' }}>akhiramalu5479@gmail.com</h5>
                    
              
                 
    <div className="social-icons" >
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={40} class="iconfacebook" />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={40} class="icontwitter" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={40} class="iconinstagram" />
    </a> 
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={40} class="iconlinkedin" />
    </a>
    </div>
    </div>
    </div>
    </div>
    <br/><br/><br/>
    <div class="col-lg-8">
          <div class="card10" >
                        
                          <br/><br/> <br/><br/> <br/>
                          <h1>GET IN TOUCH</h1>
                          <br/><br/> 
                          <form action="/action_page.php" style={{border: "1 solid #ccc"}}>
                
                          <label for="email"></label>
                        <input type="text" class="email" placeholder="Enter Email" name="email" required/>

                        <label for="phone"></label>
                         <input type="tel" class="mobile" placeholder="Mobile no" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                        <label for="psw-repeat"></label>
                        <input type="text"  class="message" placeholder="Message" name="message" required/>
                          
                          <button type="submit" id="submit">Send Me</button>




     

                    </form>


    </div>


                  
          
   
  










  </div>
  

  
    
  

  
</div>
</div>

)
}

export default Contact