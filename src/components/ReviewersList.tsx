import {useStorage} from "../hooks/useStorage";
import {Emails} from "../types";

export const ReviewersList = ({selectedGroup}) => {
  const [emails, setEmails] = useStorage<Emails>('emails', {}, 'sync')

  const handleDelete = (selectedEmail: string) => {
    setEmails(prevState =>
      ({
        ...prevState,
        [selectedGroup]: prevState[selectedGroup].filter(email => email !== selectedEmail)
      })
    )
  }

  return (
    <div className='list'>
      {emails[selectedGroup] && emails[selectedGroup].map(email => <div className='reviewer-container'>
        <span className='email'>{email}</span>

        <button className='delete' onClick={() => handleDelete(email)}>Delete</button>
      </div>)}
    </div>
  );
};