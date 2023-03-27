import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
    return (
        <DIV className='navbar'>
            <div className="my-logo">
                <Link to="/">VINOD</Link>
            </div>

            <div className="navbar-menu">
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="nav-link home"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ textDecoration: 'none' }}
                        >Home</Link>
                    </li>

                    <li>
                        <Link
                            to="/about"
                            className="nav-link about"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ textDecoration: 'none' }}
                        >About</Link>
                    </li>

                    <li>
                        <Link
                            to="/contact"
                            className="nav-link contact"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ textDecoration: 'none' }}
                        >Contact</Link>
                    </li>

                    <li>
                        <Link
                            to="/skills"
                            className="nav-link skills"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ textDecoration: 'none' }}
                        >Skills</Link>
                    </li>

                    <li>
                        <Link
                            to="/projects"
                            className="nav-link projects"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ textDecoration: 'none' }}
                        >Projects</Link>
                    </li>

                </ul>

            </div>

        </DIV>
    )
}

export default Navbar

const DIV = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#808080;
    width: 100%;
    height: auto;
    background-color: rgb(176, 180, 230);
    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }

  ul {
    gap: 30px;
    list-style: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    margin-right: 40px;
    font-size:20px;
    }

    .my-logo {
        margin-left: 40px;
        font-size: 30px;
        text-decoration: none;
    }
`