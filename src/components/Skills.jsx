import React from 'react'

import img3 from '../components/IMAGE/html.png'
import img4 from '../components/IMAGE/css.png'
import img5 from '../components/IMAGE/js.jpg'
import img6 from '../components/IMAGE/boostrap.jpg'
import img7 from '../components/IMAGE/react.jpg'
import img8 from '../components/IMAGE/py.jpg'
import img9 from '../components/IMAGE/dj.png'
import 'bootstrap-icons/font/bootstrap-icons.css';





const Skills = () => {
  return (
    
    <div class="container1">
    <div class="row">
      <div class="col-sm">
      <div class="d-flex  justify-content-center">
  <div class="d-flex text-primary">
      <div class="vr border-10 opacity-100"></div>
      <div class="lang">
      {/* <i class="fas fa-language" />
      <h3>Languages</h3>
      <ul>
        <li>
          English
        </li>
        <li>malayalam</li>
      </ul> */}
        {/* <div class="soft">  */}
      <ul>
      
      <h1 > Soft Skills</h1>
      <li>Communication Skill</li>
      <li>Attension to Detail</li>
      <li>Team Work</li>
      <li>Problem Solving Skill</li>
      <li>Adaptability</li>
      </ul>
      {/* </div>  */}
      {/* <div class="tech">  */}
      <ul>
   
      <i class="bi bi-code text-success"></i>

      <h1>Technical Skills</h1>
      <h2>Front end</h2>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
      <li>Boostrap</li>
      <li>React js</li>
    
      <h2>Back end</h2>
      <li>Python </li>
      <li>Django </li>
      


      </ul>
      </div>
      {/* </div>
    */}
      
    
  </div>
  

</div>
       
      </div>
      
      <div class="col-sm">
        <div class="shrink">
      <div class="img1">
        <h1   style={{ marginBottom: '70px' }}>Frond end</h1>
      <img src={img3}  class="rounded-circle" width="160"/>
      <img src={img4} class="rounded-circle" width="160"/>
      <img src={img5} class="rounded-circle" width="160"/>
      </div>
      <div class="img1">
      <img src={img6}  class="rounded-circle" width="160"/>
    
      <img src={img7}   class="rounded-circle img3" width="160"/>
      
      </div>
      
      <div class="img">
        <h1   style={{ marginBottom: '70px' }}>Back end</h1>
      <img src={img8}   class="rounded-circle" width="160"/>
      <img src={img9}  class="rounded-circle img3"width="160"/>
      
      </div>
      
      </div>
     </div>
     </div>
     </div>
  )
}

export default Skills