import "./style.css";

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
      <Skill skill="HTML + CSS" emoji="😊" color="yellow" />
      <Skill skill="BootStrip" emoji="👍" color="lightblue" />
      <Skill skill="javaScript" emoji="😎" color="orange" />
      <Skill skill="React" emoji="💪" color="red" />
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
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
