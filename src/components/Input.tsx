import {useStorage} from "../hooks/useStorage";
import {useEffect, useState} from "react";
import {Emails} from "../types";

interface InputProps {
  selectedInputType: 'email' | 'group'
}

export const Input = ({selectedInputType} :InputProps) => {
  const [emails, setEmails] = useStorage<Emails>('emails', {}, 'sync')
  const [selectedGroup, setSelectedGroup] = useStorage<string>('selectedGroup', '', 'sync')

  const [email, setEmail] = useState('');
  const [group, setGroup] = useState('');

  const hasGroups = !!Object.keys(emails).length

  const handleAddReviewer = () => {
    if (!emails[selectedGroup].includes(email)) {
      setEmails(prevState => ({...prevState, [selectedGroup]: [...prevState[selectedGroup], email]}) )
      setEmail('')
    }
  }

  const handleAddGroup = () => {
    const groups = Object.keys(emails)

    if (!groups.includes(group)) {
      setEmails(prevState => ({ ...prevState, [group]: []}))
      setGroup('')

      !groups.length && setSelectedGroup(group)
    }
  }

  return (
    <div>
      <div className="input-container">
        {selectedInputType === 'group' &&
          <>
            <div>
              <label>Group name</label>
              <input type="text" value={group} onChange={e => setGroup(e.target.value)}/>
            </div>

            <button className='submit' onClick={handleAddGroup}>Add</button>
          </>
        }
      </div>

      {selectedInputType === 'email' && hasGroups &&
        <div className="input-container">
          <div>
            <label>Add a reviewer to the {selectedGroup} group</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>

          <button className='submit' onClick={handleAddReviewer}>Add</button>
        </div>
      }
    </div>
  );
};