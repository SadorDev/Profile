import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
};

const Avatar = () => {
  return <img className="avatar" src="IMG_3879.jpg" alt="profile" />;
};

const Intro = () => {
  return (
    <div>
      <h1> Sador Zerezghi </h1>
      <p>
        {" "}
        I'm an aspiring front-end web developer speciliasing in JavaScript. I am
        currently learning React via Jonas's Udemy course. I hope to land a
        front end job in 2023🙂
      </p>
      <p> Bim is awesome! </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="HTML & CSS" emoji="💻" color="Red" />
      <Skill skill="JavaScript" emoji="💻" color="Yellow" />
      <Skill skill="React" emoji="💻" color="lightblue" />
      <Skill skill="Node.js" emoji="💻" color="green" />
      <Skill skill="TypeScript" emoji="💻" color="blue" />
      {Skill({ emoji: "💻", skill: "Vue", color: "lightgreen" })}
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span> {props.skill} </span>
      <span> {props.emoji} </span>
    </div>
  );
};

// const mySkills = {emoji: "💻", skill: "Vue", color:"lightgreen"}

// Skill(mySkills)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
