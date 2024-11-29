import React from 'react'
import img1 from '../components/IMAGE/malu1.jpg'

    
    

const Home = () => {
  return (
   <div class="container-fluid">

    <div class="hello">
      <br /><br />
    <h1 >AKHIRA S R</h1>
    <h2> FULL STACK DEVELOPER</h2>
 
          <div class="card">
                <div class="imgBox">
                  <img src={img1} width="400"  height="500"/>
                </div>

                <div class="details">
                    <h1 >AKHIRA S R</h1>
                    <h2> FULL STACK DEVELOPER</h2>
                    <p> A passionate and dedicated web developer</p>
                </div>
          </div>
     
</div>
</div>  
  )
}

export default Home