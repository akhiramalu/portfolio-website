import React from 'react'
import images from '../components/IMAGE/boostrap.jpg'
import imges from '../components/IMAGE/html.png'
import imge from '../components/IMAGE/js.jpg'
import img from '../components/IMAGE/css.png'
import vsc from '../components/IMAGE/vscode.png'
import gith from '../components/IMAGE/gith.png'
import git from '../components/IMAGE/git.png'


const Projects = () => {
  return (
    <div class="container-fluid">
    {/* <div class="body3">
   <h2>PROJECTS</h2>  */}
   <div class="container7">
  <div class="row">
    <div class="card12">
    <div class="col-sm">
     <h3>kerala tourism</h3>
     <a href=" https://akhiramalu.github.io/-tourism-website/"> https://akhiramalu.github.io/-tourism-website/</a>
     </div> 
  
    
   
     <h3>kerala tourism</h3>
     <a href=" https://akhiramalu.github.io/-tourism-website/"> https://akhiramalu.github.io/-tourism-website/</a>
    </div>
    </div>
    </div>
    <div class="col-sm">
    <img src={images}  class="rounded-circle" width="160"/>
    <img src={imges}  class="rounded-circle" width="160"/>
 
    <div class="col-sm">
   
    <img src={ img}  class="rounded-circle" width="160"/>
    <img src={imge}  class="rounded-circle" width="160"/>
    </div>
    <div>
    <img src={ vsc}  class="rounded-circle"/>
    <img src={gith}  class="rounded-circle" />
    <img src={ git}  class="rounded-circle"/>
    </div>
    </div>
  </div>


    
    
    
     
     
    //  </div>
    //  </div>
  )
}

export default Projects