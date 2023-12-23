import './App.css'
import {Input} from "./Input";
import {ReviewersList} from "./ReviewersList";
import {useState} from "react";

function App() {
  const [selectedGroup, setSelectedGroup] = useState('');

  return (
    <div className='container'>

      <Input selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />

      <ReviewersList selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
    </div>
  )
}

export default App
