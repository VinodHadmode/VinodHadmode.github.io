import React from 'react'
import styled from 'styled-components'
import Profile from "../Images/Profile.jpg"

const About = () => {
  return (
    <DIV>
      <h1>ABOUT ME !</h1>
      <div className='about-container'>
        <div className='about-left'>
          <img src={Profile} alt="" width="350" height="350" />
        </div>

        <div className='about-right'>

          <h2>Hi, I am Vinod Hadmode</h2>
          <p>Highly motivated MERN stack developer with a passion
            for creating efficient, scalable, and user-friendly web
            applications. Proficient in MERN stack with hands-on
            experience in front-end and back-end development.
            Seeking an opportunity to enhance my skills further</p>
        </div>
      </div>


    </DIV>
  )
}

export default About

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  align-items: center;
  border: 1px solid red;

  .about-container {
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 70%;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    border: 1px solid green;
  }
  
  .about-left img{
    border-radius: 50%;
  }
`