import './App.css'
import {Input} from "./Input";
import {ReviewersList} from "./ReviewersList";
import {useStorage} from "../hooks/useStorage";
import {Emails} from "../types";
import {Group} from "./Group";
import {useState} from "react";

function App() {
  const [emails] = useStorage<Emails>('emails', {}, 'sync')
  const [selectedInputType, setSelectedInputType] = useState<'email' | 'group'>('group');

  const handleChangeInputType = () => {
    if (!!Object.keys(emails).length) {
      setSelectedInputType(selectedInputType === 'email' ? 'group' : 'email')
    }
  }

  return (
    <div className='container'>
      <div className='header-container'>
        <h2 className='title'>Auto add reviewers</h2>

        <button
          className='type-switch'
          onClick={handleChangeInputType}
        >
          Add {selectedInputType === 'email' ? 'email' : 'group'}
        </button>
      </div>

      <div className="body">
        <div className='group-list'>
          {Object.entries(emails).map(([key], index) => (
            <Group
              key={index}
              groupName={key}
              setSelectedInputType={setSelectedInputType}
            />
            ))}
        </div>

        <Input selectedInputType={selectedInputType} />

        {selectedInputType === 'email' &&
          <>
            <ReviewersList />
            <button onClick={() => null}>Add these reviewers to the PR</button>
          </>
        }
      </div>
    </div>
  )
}

export default App
