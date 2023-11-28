import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section id='projects'>
        <span className='projectHeading'>Projects all</span>

        <div className='projectBlock'>
            <div className='projectItem'>
                <img src='' alt='' className='projectImg'/>
                <div className='projectText'>
                <h2> My First Project </h2>
                <p>tell something about your project</p>
                </div>
            </div>
            <div className='projectItem' >
                <img src='' alt='' className='projectImg'/>
                <div className='projectText'>
                <h2> My Second Project </h2>
                <p>tell something about your project</p>
                </div>
            </div>
            <div className='projectItem'>
                <img src='' alt='' className='projectImg'/>
                <div className='projectText'>
                <h2> My Third Project </h2>
                <p>tell something about your project</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
