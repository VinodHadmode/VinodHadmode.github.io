import styled from "styled-components";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CoderImage from "../Images/Coder2.png";

function Home() {
  const [Text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "Professional Coder.",
      "MERN Stack Developer.",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <DIV id="home">
      <section className="home-container">
        <div className="resume-section">
          <h2>Hi, I am</h2>
          <h1>
            <span>Vinod Hadmode</span>
          </h1>
          <h1>
            A <span>{Text}</span>
            <Cursor cursorBlinking={false} cursorStyle="|" />
          </h1> 

          <a
            href="https://drive.google.com/uc?id=1cILEyGW2m9utCV_XUp9UIcttO9nUnxYd&export=download"
            className="resume-button"
            id="resume-link-2"
          >
            <div
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1cILEyGW2m9utCV_XUp9UIcttO9nUnxYd/view",
                  "_blank"
                )
              }
              className="resume-btn-inner"
            >
              Resume
            </div>
          </a>
        </div>

        <div className="coder-animation">
          <img src={CoderImage} alt="Coder-Animation" />
        </div>
      </section>
    </DIV>
  );
}

export default Home;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
  height: 70vh;
  background-color: rgb(25, 25, 27);
  text-align: center;

  .home-container {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
  }

  .home-container h2,
  .home-container h1 {
    margin-bottom: 0.5em;
    color: #fff;
  }

  .resume-section {
    flex: 1;
  }

  .resume-button {
    text-decoration: none; /* remove default link styling */
  }

  .resume-btn-inner {
    display: inline-block;
    background-color: teal;
    color: white;
    padding: 12px 28px;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
  }

  .resume-btn-inner:hover {
    background-color: #272424;
    border: 1px solid gray;
    transform: scale(1.05);
  }

  .coder-animation img {
    width: 100%;
    height: auto;
    max-width: 400px;
    display: block;
    margin: 0 auto;
  }

  // Styling for Small screens, laptops
  @media (min-width: 769px) and (max-width: 1024px) {
    .home-container {
      flex-direction: column;
      align-items: center;
    }
    .coder-animation img {
      display: none;
    }
  }

  // Styling for iPads, Tablets
  @media (min-width: 481px) and (max-width: 768px) {
    .home-container {
      flex-direction: column;
      align-items: center;
    }
    .coder-animation img {
      display: none; // Hide image on smaller screens
    }
  }

  // Styling for mobile
  @media (max-width: 480px) {
    .home-container {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    .coder-animation img {
      display: none; // Hide image on smaller screens
    }
  }
`;
