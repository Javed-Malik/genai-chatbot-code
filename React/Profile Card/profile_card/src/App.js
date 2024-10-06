import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <card />
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
        <data />
      </div>
    </div>
  );
}

function card() {
  return <div className="card">return ;</div>;
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="javed1.jpeg" />
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
      {/* <Skill skill="HTML + CSS" emoji="😊" color="yellow" />
      <Skill skill="BootStrip" emoji="👍" color="lightblue" />
      <Skill skill="javaScript" emoji="😎" color="orange" />
      <Skill skill="React" emoji="💪" color="red" /> */}
    </div>
  );
}
function Intro() {
  return (
    <div className="intro">
      <h1> JAVED ASLAM </h1>
      <p>
        A passionate web developer with expertise in HTML, CSS, JavaScript,
        Bootstrap, and React.js. I enjoy creating dynamic and responsive
        websites that provide a seamless user experience. Let's build something
        amazing together!
      </p>
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😊"}
        {level === "intermediate" && "😎"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

function Data() {
  return (
    <div className="data">
      <p> this is my skills which i earned in my 7 month of period of time </p>
    </div>
  );
}

export default App;
