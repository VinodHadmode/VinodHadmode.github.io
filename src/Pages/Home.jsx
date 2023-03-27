import React from 'react'
import styled from 'styled-components'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import Profile from "../Images/Profile.jpg"

function Home() {
  const [Text] = useTypewriter({
    words: ['Full Stack Developer.', 'Professional Coder.', 'MERN Stack Developer.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000
  })

  return (
    <DIV id='home'>
        <div className='about-container'>
          <h2>Welcome to my world !</h2>
          <h1>Hi, I am
            <span style={{ color: "red" }}> Vinod Hadmode</span>
          </h1>
          <h2>a <span> {Text}</span></h2>
          <button>RESUME</button>
          {/* <Cursor
            cursorBlinking="false"
            cursorStyle='|'
            cursorColor='red'
          /> */}
        </div>
    </DIV>
  )
}
export default Home

const DIV = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:  40PX;
  height: 500px;

  h1 {
    font-size: 50px;
  }
  .about-container{
    width: 70%;
  }
  .social-icons {
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 20px;
  }

  button {
    padding: 10px;
    width: 150px;
    font-size: large;
    border-radius: 7px;
    background-color:rgb(89, 94, 139);
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
 
`