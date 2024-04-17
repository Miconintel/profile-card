import "./styles.css";


import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import Skill from "./components/Skill";

export default function App() {
  return (
    <div className="card">
    <h1 className="h1">Jonathan Schmedtmann </h1>
    <Avatar/>
    <Intro/>    
    <Skill/>
    </div>
  );
}
