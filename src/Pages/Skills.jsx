import React from 'react'
import styled from "styled-components"

import HTML from "../Images/HTML5.png"
import CSS from "../Images/CSS.png"
import Javascript from "../Images/Javascript.png"
import ReactJS from "../Images/Reactjs.png"
import Chakra from "../Images/ChakraUI.png"
import Typescript from "../Images/Typescript.png"

function Skills() {
  return (
    <DIV>
      <h1>MY SKILLS !</h1> <br />
      <div className='skills-section'>
        <div>
          <img src={HTML} alt="" className='skill-card' />
        </div>

        <div>
          <img src={CSS} alt="" className='skill-card' />
        </div>

        <div>
          <img src={Javascript} alt="" className='skill-card' />
        </div>

        <div>
          <img src={ReactJS} alt="" className='skill-card' />
        </div>

        <div>
          <img src={Chakra} alt="" className='skill-card' />
        </div>

        <div>
          <img src={Typescript} alt="" className='skill-card' />
        </div>

      </div>
    </DIV>
  )
}

export default Skills


const DIV = styled.div`
  border: 1px solid red;
  padding: 30px;
  align-items: center;
  display: flex;
  flex-direction: column;

  /* h1 {
    text-decoration: underline;
  } */
  .skills-section {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    justify-content: space-around;
    width: 70%;
    margin: auto;
    border: 1px solid red;
    
  }
  .skill-card {
    border: 1px solid teal;
  }
  img {
    width: 45%;
    height: 100px;
  }
`