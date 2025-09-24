import styled from "styled-components";

// Imported images
import HTML from "../Images/HTML5.png";
import CSS from "../Images/CSS.png";
import Javascript from "../Images/Javascript.png";
import ReactJS from "../Images/React.png";
import Redux from "../Images/Redux.png";
// import ReduxToolkit from "../Images/ReduxToolkit.png";
import Node from "../Images/Node.png";
import Express from "../Images/Express.png";
import MongoDB from "../Images/MongoDB.png";
import Chakra from "../Images/ChakraUI.png";
import Bootstrap from "../Images/Bootstrap.png";
import TailwindCSS from "../Images/TailwindCSS.png";
import Typescript from "../Images/Typescript.png";
import VSCode from "../Images/VS-Code.png";
import Github from "../Images/Github.png";
import Postman from "../Images/Postman.png";
import Git from "../Images/Git.png";
import CSharp from "../Images/CSharp.png";
import DotNet from "../Images/DotNet.png";
import MySQL from "../Images/MySQL.png";
import SQL from "../Images/SQL.png";

function Skills() {
  return (
    <DIV id="skills">
      <h1>MY SKILLS !</h1>
      <h1>Languages and Frameworks</h1>

      <div className="skills-section">
        {/* Core Languages */}
        <SkillCard img={HTML} title="HTML" />
        <SkillCard img={CSS} title="CSS" />
        <SkillCard img={Javascript} title="JavaScript" />
        <SkillCard img={Typescript} title="TypeScript" />
        <SkillCard img={CSharp} title="C#" />
        <SkillCard img={SQL} title="SQL" />

        {/* Frontend Frameworks */}
        <SkillCard img={ReactJS} title="React JS" />
        <SkillCard img={Redux} title="Redux" />

        {/* Backend Frameworks */}
        <SkillCard img={Node} title="Node JS" />
        <SkillCard img={Express} title="Express JS" />
        <SkillCard img={DotNet} title=".NET" />

        {/* Databases */}
        <SkillCard img={MongoDB} title="MongoDB" />
        <SkillCard img={MySQL} title="MySQL" />

        {/* Styling/UI */}
        <SkillCard img={Bootstrap} title="Bootstrap" />
        <SkillCard img={TailwindCSS} title="Tailwind" />
        <SkillCard img={Chakra} title="Chakra UI" />
      </div>

      <h1>Developer Tools</h1>
      <div className="devtools-sections">
        <DevToolCard img={VSCode} title="VSCode" />
        <DevToolCard img={Github} title="Github" />
        <DevToolCard img={Postman} title="Postman" />
        <DevToolCard img={Git} title="Git" />
      </div>
    </DIV>
  );
}

const SkillCard = ({ img, title }) => (
  <div className="skills-card">
    <img className="skills-card-img" src={img} alt={`${title} logo`} />
    <h2 className="skills-card-name">{title}</h2>
  </div>
);

const DevToolCard = ({ img, title }) => (
  <div className="devtools-card">
    <img className="devtools-card-img" src={img} alt={`${title} logo`} />
    <h2 className="devtools-card-name">{title}</h2>
  </div>
);

export default Skills;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  padding-bottom: 30px;
  gap: 20px;
  background-color: rgb(25, 25, 27);

  h1 {
    margin-bottom: 40px;
    text-align: center;
  }

  .skills-section,
  .devtools-sections {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    /* border: 2px solid red; */
  }

  .skills-card,
  .devtools-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    border-radius: 8px;
    padding: 20px;
    background-color: #1f1f21;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.05);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }

  // Responsive Styles
  @media (min-width: 769px) and (max-width: 1024px) {
    .skills-section,
    .devtools-sections {
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .skills-section,
    .devtools-sections {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
  }

  @media (max-width: 480px) {
    margin: 40px;
    .skills-section,
    .devtools-sections {
      grid-template-columns: repeat(1, 1fr);
      gap: 30px;
    }
  }
`;
