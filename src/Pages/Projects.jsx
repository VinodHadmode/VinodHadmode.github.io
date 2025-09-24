import React from 'react';
import styled from 'styled-components';
import ZEE5 from "../Images/ZEE5-Banner.png";
import EMS from "../Images/EMS-Banner.png";
import ShopEasy from "../Images/SEPortfolio.png";
import Vmart from "../Images/Vmart-Banner.JPG"

function Projects() {
  return (
    <DIV id="projects">
      <h1>PROJECTS !</h1>
      <div className="project-section">

        <div className="project-card">
          <img src={Vmart} alt="vmart" />
          <h2 className="project-title">VMART</h2>
          <p className="project-description">
            Vmart is a full-stack e-commerce application which provides a seamless shopping experience, allowing users to browse products, add items to the cart, and place orders.
          </p>
          <p className="project-tech-stack">Tech Stack: HTML, CSS, Javascript, React, Nodejs, Expressjs, MongoDB, TailwindCSS</p>
          <div className='live-buttons'>
            <a href="https://github.com/VinodHadmode/Vmart-Ecommerce-App" target="_blank" rel="noopener noreferrer">
              <button>Github</button>
            </a>
            <a href="https://vmart-frontend-six.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button>Live</button>
            </a>
          </div>

        </div>

        <div className="project-card">
          <img src={ShopEasy} alt="Shopeasy" />
          <h2 className="project-title">SHOP EASY</h2>
          <p className="project-description">
            ShopEasy is an Indian e-commerce platform that specializes in fashion
            and lifestyle products. It's a retailer of male, female, and kids' wear.
          </p>
          <p className="project-tech-stack">Tech Stack: HTML, CSS, React, Nodejs, Expressjs, MongoDB, Bootstrap</p>
          <div className='live-buttons'>
            <a href="https://github.com/VinodHadmode/ShopEasy-Ecommerce-App" target="_blank" rel="noopener noreferrer">
              <button>Github</button>
            </a>
            <a href="https://shopeasy-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button>Live</button>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={EMS} alt="EMS" />
          <h2 className="project-title">EMS</h2>
          <p className="project-description">
            Eastern Mountain Sports is an outdoor clothing and equipment retailer
            in the Northeastern United States headquartered in Meriden.
          </p>
          <p className="project-tech-stack">Tech Stack: HTML, CSS, React, Chakra UI</p>
          <div className='live-buttons'>
            <a href="https://github.com/VinodHadmode/Adventure-Store" target="_blank" rel="noopener noreferrer">
              <button>Github</button>
            </a>
            <a href="https://eastern-mountain-sport.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button>Live</button>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={ZEE5} alt="Zee5" />
          <h2 className="project-title">ZEE-FLIX</h2>
          <p className="project-description">
            ZEE-FLIX is an Indian subscription video on-demand and over-the-top
            streaming service, run by Zee Entertainment Enterprises.
          </p>
          <p className="project-tech-stack">Tech Stack: HTML, CSS, Javascript</p>
          <div className='live-buttons'>
            <a href="https://github.com/VinodHadmode/Zeeflix-OTT-Platform" target="_blank" rel="noopener noreferrer">
              <button>Github</button>
            </a>
            <a href="https://zee-flix.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button>Live</button>
            </a>
          </div>
        </div>

      </div>
    </DIV>
  );
}

export default Projects;

const DIV = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  padding-bottom: 30px;
  background-color: rgb(25, 25, 27);

  h1 {
    margin-bottom: 40px;
  }

  .project-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 50px;
    width: 80%;
    margin: auto;
    /* border: 2px solid red; */

  }

  .project-card {
    background-color: #1a1a1d;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    overflow: hidden; 

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    }

    img {
      border-radius: 8px;
      width: 100%;
      height: 180px;
      object-fit: cover; 
      margin-bottom: 15px;
    }

    .project-title {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #00adb5;
      white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .project-description {
      font-size: 1rem;
      margin-bottom: 15px;
      line-height: 1.5; 
      word-wrap: break-word; 
    }

    .project-tech-stack {
      font-size: 0.9rem;
      margin-bottom: 15px;
      color: #a1a1a1;
      word-wrap: break-word;
    }

    .live-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;

      button {
        background-color: teal;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;

        &:hover {
          background-color: #00adb5;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  // Responsive styles for smaller screens
  @media (max-width: 768px) {
    .project-section {
      grid-template-columns: repeat(1, 1fr); 
    }
  }
`;

