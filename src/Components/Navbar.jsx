import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 80; // offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DIV className="navbar" id="nav-menu">
      <div className="my-logo">
        <h1>
          Vinod <span>Hadmode</span>
        </h1>
      </div>

      <div className="navbar-menu">
        <ul className={`navbar-items ${isOpen ? "active" : ""}`}>
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <HashLink
                smooth
                to={`/#${item}`}
                className={`nav-link ${activeSection === item ? "active" : ""}`}
                onClick={() => {
                  setActiveSection(item);
                  closeNavbar(); 
                }}
              >
                {item.toUpperCase()}
              </HashLink>
            </li>
          ))}

          <li>
            <a
              href="https://drive.google.com/uc?id=1cILEyGW2m9utCV_XUp9UIcttO9nUnxYd&export=download"
              className="nav-link resume"
              id="resume-link-1"
            >
              <div
                className="resume-btn-inner"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1cILEyGW2m9utCV_XUp9UIcttO9nUnxYd/view",
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
    color: white;
    transition: all 0.3s ease;
    cursor: pointer;

    &.active {
      color: teal;
      font-weight: bold;
    }

    &:hover {
      color: teal;
      transform: scale(1.05);
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
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      height: auto;
      font-size: 1.5rem;
      top: 0;
      left: -200%;
      position: absolute;
      z-index: 2;
      background: rgba(0, 0, 0, 0.9);
      transition: 0.3s;
      padding: 20px 0;
    }

    .navbar-items li {
      padding: 10px 20px;
      width: 100%;
      text-align: center;
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
