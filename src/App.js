import React, {useState} from 'react';
import logo from './logo.svg';
import Members from "./Members/Members";
import MemberForm from "./Members/MemberForm";
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Jog Manson",
      email:"mogjanson@hotmail.com",
      role: "Backend Engineer"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }
  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
