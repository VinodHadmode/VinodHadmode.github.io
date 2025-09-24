import styled from 'styled-components';
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

function Contact() {
  return (
    <DIV id="contact">
      <h1>CONTACT !</h1>
      <div className="contact-section">
        <div className="contact-details">
          <h2>Reach Out to Me!!</h2>
          <div className="details">
            <div>
              <FiPhone size={25} />
              <p id="contact-phone">+91-7875142078</p>
            </div>
            <div>
              <CiMail size={25} />
              <p id="contact-email">vinodhadmode@gmail.com</p>
            </div>
            <div>
              <CiLocationOn size={25}/>
              <p>Pune, Maharashtra</p>
            </div>
          </div>

          <div className="contact-logo">
            <a href="https://github.com/VinodHadmode" target="_blank" rel="noopener noreferrer">
              <BsGithub className='react-icons' id="contact-github" style={{ color: "teal" }} />
            </a>
            <a href="https://www.linkedin.com/in/vinod-hadmode/" target="_blank" rel="noopener noreferrer">
              <AiOutlineLinkedin className='react-icons' id="contact-linkedin" style={{ color: "teal" }} />
            </a>
          </div>
        </div>

        <form>
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Email' />
          <textarea placeholder='Your Message' /> <br />
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </DIV>
  );
}

export default Contact;

const DIV = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  padding-bottom: 30px;
  background-color: rgb(25, 25, 27);

  .contact-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    gap: 20px;
    /* border: 2px solid red; */
    align-items: stretch;
  }

  .contact-details, form {
    flex: 1;
    padding: 30px;
    border: 1px solid gray;
    border-radius: 8px;
    background-color: rgba(39, 38, 38, 0.8); 
    min-height: 300px;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .details {
    display: flex;
    flex-direction: column;
  }

  .details div {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: left;
  }

  h2 {
    margin-bottom: 10px;
    color: teal;
  }

  #contact-email {
    word-break: break-word;
  }

  .contact-logo {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 15px;
  }

  .react-icons {
    font-size: 50px;
    padding: 5px;
    transition: transform 0.3s; 
    color: teal;

    &:hover {
      transform: scale(1.1); 
      cursor: pointer;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  form input, form textarea {
    width: 100%;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  
  form input:focus, form textarea:focus {
    border-color: teal;
    box-shadow: 0 0 5px teal;
    outline: none; 
  }

  form button {
    background-color: teal;
    color: white;
    padding: 10px 20px;
    margin: auto;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s, transform 0.2s; 
    margin-top: -20px;

    &:hover {
      background-color: #272424;
      border: 1px solid gray;
      transform: scale(1.05); 
    }
  }

  // Styling for iPads, Tablets
  @media (min-width: 480px) and (max-width: 768px) {
    .contact-section {
      flex-direction: column;
      align-items: center;
    }
    .contact-details, form {
      width: 100%;
    }
  }

  // Styling for mobile screens
  @media (max-width: 480px) {
    margin: 40px;
    .contact-section {
      flex-direction: column;
    }
    .contact-details, form {
      width: 100%;
    }
    .details div {
      justify-content: center; 
      margin-bottom: 10px; 
    }
  }
`;

