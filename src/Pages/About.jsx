import styled from "styled-components";
import Profile from "../Images/Profile.jpeg";

const About = () => {
  return (
    <DIV id="about" className="about section">
      <h1>ABOUT ME !</h1>
      <div className="about-container">
        <div className="about-left">
          <div className="profile-wrapper">
            <img className="home-img" src={Profile} alt="Vinod Hadmode" />
          </div>
        </div>

        <div className="about-right">
          <h2 id="user-detail-name">Hi, I am Vinod Hadmode</h2>
          <p id="user-detail-intro">
            Full Stack Web Developer skilled in building scalable and responsive
            applications using the MERN stack and .NET technologies. Experienced
            in developing RESTful APIs and ensuring seamless frontend–backend
            integration. Quick learner with strong problem-solving skills and a
            passion for delivering user-friendly solutions.
          </p>
        </div>
      </div>
    </DIV>
  );
};

export default About;

const DIV = styled.div`
  background-color: rgb(25, 25, 27);
  color: white;
  text-align: center;
  margin: 40px;
  padding-bottom: 30px;

  h1 {
    margin-bottom: 40px;
    padding-top: 20px;
  }

  .about-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    width: 80%;
    margin: auto;
    flex-direction: row;
  }

  .profile-wrapper {
    width: 320px; 
    height: 320px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 15%;
    transition: transform 0.3s ease-in-out;
  }

  .profile-wrapper img:hover {
    transform: scale(1.05);
  }

  .about-right {
    text-align: left;
    max-width: 600px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: #00bfa6;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #d1d1d1;
  }

  /* Tablets and iPads */
  @media (max-width: 1024px) {
    .about-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .about-right {
      text-align: center;
    }

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }

  /* Mobile Devices */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    .profile-wrapper {
      width: 250px;
      height: 250px;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  /* Small Mobiles */
  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }

    .profile-wrapper {
      width: 200px;
      height: 200px;
    }

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  /* Extra Small Mobiles */
  @media (max-width: 300px) {
    .profile-wrapper {
      width: 130px;
      height: 130px;
    }
  }
`;
