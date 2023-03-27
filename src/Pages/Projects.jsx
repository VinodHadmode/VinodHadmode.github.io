import React from 'react'
import styled from 'styled-components'
import ZEE5 from "../Images/ZEE5-Banner.png"
import Myntra from "../Images/Myntra-Banner.png"
import MailChimp from "../Images/Mailchimp-Banner.png"
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <DIV>
      <h1>PROJECTS !</h1>
      <div className='project-section'>
        <div className='project-card'>
          <img src={ZEE5} alt="Zee5" />
          <h2>ZEE5 </h2>
          <p>ZEE5 is an Indian subscription video on-demand and over-the-top streaming service, run by Zee Entertainment Enterprises.</p>
          <p>Tech Stack : HTML,CSS,Javascript</p>
          <div className='live-buttons'>
            <Link to="https://github.com/SutharShantanu/-fit-hook-8952"> <button>Github</button></Link>
            <Link to="https://zee-flix.netlify.app/"><button>Live</button></Link>
          </div>
        </div>

        <div className='project-card'>
          <img src={Myntra} alt="Zee5" />
          <h2>MYNTRA </h2>
          <p>ZEE5 is an Indian subscription video on-demand and over-the-top streaming service, run by Zee Entertainment Enterprises.</p>
          <p>Tech Stack : HTML,CSS,React,Chakra UI</p>
          <div className='live-buttons'>
            <Link to="https://github.com/SutharShantanu/-fit-hook-8952"> <button>Github</button></Link>
            <Link to="https://zee-flix.netlify.app/"><button>Live</button></Link>
          </div>
        </div>

        <div className='project-card'>
          <img src={MailChimp} alt="Zee5" />
          <h2>MAILCHIMP </h2>
          <p>ZEE5 is an Indian subscription video on-demand and over-the-top streaming service, run by Zee Entertainment Enterprises.</p>
          <p>Tech Stack : HTML,CSS,Javascript</p>
          <div className='live-buttons'>
            <Link to="https://github.com/SutharShantanu/-fit-hook-8952"> <button>Github</button></Link>
            <Link to="https://zee-flix.netlify.app/"><button>Live</button></Link>
          </div>
        </div>

        <div className='project-card'>
          <img src={ZEE5} alt="Zee5" />
          <h2>ZEE5 </h2>
          <p>ZEE5 is an Indian subscription video on-demand and over-the-top
            streaming service, run by Zee Entertainment Enterprises.</p>
          <p>Tech Stack : HTML,CSS,Javascript</p>
          <div className='live-buttons'>
            <Link to="https://github.com/SutharShantanu/-fit-hook-8952"> <button>Github</button></Link>
            <Link to="https://zee-flix.netlify.app/"><button>Live</button></Link>
          </div>
        </div>

      </div>
    </DIV>
  )
}

export default Projects


const DIV = styled.div`
   display: flex;
   flex-direction: column;
   margin: auto;
   align-items: center;
   width: 70%;

   /* h1 {
     text-decoration: underline;
   } */
  .project-section {
    border: 1px solid green;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 30px;
   
    
  }
  .project-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid teal;
      padding: 40px;
  }
   img {
      width: 100%;
      height: 300px;
   }

   .live-buttons {
      /* border: 1px solid red; */
      width: 70%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
   }
   .live-buttons button {
      padding: 10px;
      width: 100px;
      font-size: large;
      background-color:rgb(89, 94, 139);
      color: white;
      text-decoration: none;
      cursor: pointer;
   }
`