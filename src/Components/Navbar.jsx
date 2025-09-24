import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  // const handleResume = () => {
  //   const resumeURL = `https://drive.google.com/file/d/1I8Aqgbn9b5ImgMPGbkDh9YUPbLET8EKm/view?usp=drive_link`;
  //   window.open(resumeURL, "_blank");
  // };

  return (
    <DIV className="navbar" id="nav-menu">
      <div className="my-logo">
        <h1>
          Vinod <span>Hadmode</span>
        </h1>
      </div>

      <div className="navbar-menu">
        <ul className={`navbar-items ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link home ${isActive ? "active" : ""}`
              }
              onClick={() => {
                scrollToSection("home");
                closeNavbar();
              }}
            >
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link about ${isActive ? "active" : ""}`
              }
              onClick={() => {
                scrollToSection("about");
                closeNavbar();
              }}
            >
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `nav-link skills ${isActive ? "active" : ""}`
              } // Updated usage
              onClick={() => {
                scrollToSection("skills");
                closeNavbar();
              }}
            >
              SKILLS
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-link projects ${isActive ? "active" : ""}`
              } // Updated usage
              onClick={() => {
                scrollToSection("projects");
                closeNavbar();
              }}
            >
              PROJECTS
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link contact ${isActive ? "active" : ""}`
              } // Updated usage
              onClick={() => {
                scrollToSection("contact");
                closeNavbar();
              }}
            >
              CONTACT
            </NavLink>
          </li>

          <li>
            <a
              href="https://drive.google.com/uc?id=1I8Aqgbn9b5ImgMPGbkDh9YUPbLET8EKm&export=download"
              className="nav-link resume"
              id="resume-link-1"
            >
              <div
                className="resume-btn-inner"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1I8Aqgbn9b5ImgMPGbkDh9YUPbLET8EKm/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                RESUME
              </div>
            </a>
          </li>
        </ul>
        <div className="humberger" onClick={toggleNavbar}>
          {isOpen ? (
            <FaTimes size={35} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={35} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </DIV>
  );
}

export default Navbar;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  background-color: rgb(41, 39, 41);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  color: white;
  box-shadow: rgba(104, 199, 60, 0.07) 0px 1px 2px,
    rgba(0, 0, 0, 0.07) 0px 2px 4px;

  .navbar-items {
    gap: 20px;
    list-style: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    margin-right: 40px;
  }

  .my-logo h1 {
    margin-left: 40px;
    font-size: 28px;
    font-weight: 700;
    color: white;
    letter-spacing: 1px;
  }

  .my-logo h1 span {
    color: teal;
  }

  .nav-link {
    text-decoration: none;
    color: white; /* Default color */
    transition: all 0.3s ease;

    &.active {
      color: teal; /* Active link color */
    }

    &:hover {
      color: teal; /* Change color on hover */
      transform: scale(1.05); /* Slightly enlarge for effect */
    }
  }

  .resume-btn-inner {
    display: inline-block;
    background-color: teal;
    color: white;
    padding: 10px 22px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease;
  }

  .resume-btn-inner:hover {
    background-color: #272424;
    border: 1px solid gray;
    transform: scale(1.05);
  }

  .humberger {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .navbar-items {
      flex-direction: column; /* Change to column for mobile */
      justify-content: flex-start; /* Align items to start */
      align-items: flex-start; /* Align items to start */
      width: 100%;
      height: auto; /* Auto height */
      font-size: 1.5rem; /* Adjust font size */
      top: 0;
      left: -200%;
      position: absolute;
      z-index: 2;
      background: rgba(0, 0, 0, 0.9);
      transition: 0.3s;
      padding: 20px 0; /* Add padding to the navbar */
    }

    .navbar-items li {
      padding: 10px 20px; /* Add padding for individual items */
      width: 100%; /* Full width for mobile items */
      text-align: center; /* Center text */
    }

    .humberger {
      display: initial;
      margin-right: 40px;
    }

    .navbar-items.active {
      left: 0;
    }
  }
`;
