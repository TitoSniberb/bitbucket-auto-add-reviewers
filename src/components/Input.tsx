import {useStorage} from "../hooks/useStorage";
import {useState} from "react";
import {Emails} from "../types";

export const Input = () => {
  const [emails, setEmails] = useStorage<Emails>('emails', [], 'sync')

  const [email, setEmail] = useState('');

  const handleAddReviewer = () => {
    if (!emails.includes(email)) {
      setEmails(prevState => [...prevState, email])
      setEmail('')
    }
  }

  return (
    <div>
      <div className='title-container'>
        <h2 className='title'>Add reviewers</h2>
      </div>

      <div className="input-container">
        <div>
          <label>Reviewer email</label>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>

        <button className='submit' onClick={handleAddReviewer}>Add</button>
      </div>
    </div>
  );
};