import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import picture from "./profile.jpg";
import "./styles.css";

const skills = [
  {
    skill: "HTML",
    level: "Intermediate",
    color: "#ff0000",
  },
  {
    skill: "CSS",
    level: "Beginner",
    color: "#0a78f5",
  },
  {
    skill: "JavaScript",
    level: "Beginner",
    color: "#e9f50a",
  },
  {
    skill: "TypeScript",
    level: "Beginner",
    color: "#2110c2",
  },
  {
    skill: "React",
    level: "In progress to beginner",
    color: "#34c3eb",
  },
  {
    skill: "Node.js",
    level: "Decent",
    color: "#00ff51",
  },
];

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
  return <img className="avatar" src={picture} alt="profile" />;
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
      {/* {skills.map((skill) => <Skill skill={skill.skill} level={skill.level} color={skill.color} />)} */}

      {/* {skills.map((skill) => ( */}
      {/* <Skill skill={skill.skill} level={skill.level} color={skill.color} /> */}

      {/* {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))} */}
      {skills.map((skill) => (
        <Skill color={skill.color} level={skill.level} skill={skill.skill} />
      ))}

      {/* <Skill skill="HTML & CSS" emoji="💻" color="Red" />
      <Skill skill="JavaScript" emoji="💻" color="Yellow" />
      <Skill skill="React" emoji="💻" color="lightblue" />
      <Skill skill="Node.js" emoji="💻" color="green" />
      <Skill skill="TypeScript" emoji="💻" color="blue" /> */}
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
