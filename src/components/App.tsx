import './App.css'
import {Input} from "./Input";
import {ReviewersList} from "./ReviewersList";
import {useStorage} from "../hooks/useStorage";
import {Emails} from "../types";
import {Group} from "./Group";

function App() {
  const [emails] = useStorage<Emails>('emails', {}, 'sync')

  return (
    <div className='container'>
      <div className='header-container'>
        <h2 className='title'>Add reviewers</h2>
      </div>

      <div className="body">
        <div className='group-list'>
          {Object.entries(emails).map(([key], index) => (
            <Group
              key={index}
              groupName={key}
            />
            ))}
        </div>

        <Input />

        <ReviewersList />
      </div>
    </div>
  )
}

export default App
