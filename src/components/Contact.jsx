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
       </div>
       </div>
    </div>

    <br/><br/><br/>
    <div class="col-lg-8">
   <div class="card10" >
    <div class="form">
      <br/><br/> <br/><br/> <br/>
    <form action="" on submit="return validate();">
                        <label for ="password" class="password">Mobile Number  </label>
                        <input type="password" id="password" /><br/><br/><br/>
                                <label for ="email" class="password">Email ID</label>
                                <input type="email" id="email"/><br/><br/>
                                <label for ="error"  id="error"></label><br/><br/>
                                          <label for ="text" class="password">Description</label>
                                          <input type="text" id="text"/><br/><br/>
                                          <button type="submit" id="submit">Send Me</button>






     




    </form>


    </div>


   </div>
  










   </div>
  
    <div className="social-icons" >
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={40} className="icon facebook" />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={40} className="icon twitter" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={40} className="icon instagram" />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={40} className="icon linkedin" />
    </a>
    
  

  </div>
  </div>
</div>
)
}

export default Contact