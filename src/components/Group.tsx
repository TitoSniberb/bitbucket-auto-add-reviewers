import {useStorage} from "../hooks/useStorage";
import {Emails} from "../types";
import React, {Dispatch, SetStateAction} from "react";

interface GroupProps {
  groupName: string
  setSelectedInputType: Dispatch<SetStateAction<'email' | 'group'>>
}

export const Group = ({groupName, setSelectedInputType}: GroupProps) => {
  const [selectedGroup, setSelectedGroup] = useStorage<string>('selectedGroup', '', 'sync')
  const [emails, setEmails] = useStorage<Emails>('emails', {}, 'sync')

  const handleDeleteEmailGroup = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation()
    const emailsCopy = { ...emails }

    delete emailsCopy[groupName]
    setEmails(emailsCopy)

    if (!Object.keys(emailsCopy).length) {
      setSelectedInputType('group')
    }
  }

  return (
      <div
        className={`group ${selectedGroup === groupName ? 'selected' : ''}`}
        onClick={() => setSelectedGroup(groupName)}
      >
        <span>
          {groupName}
        </span>

        <span className="x" onClick={handleDeleteEmailGroup}>✖</span>
      </div>
  );
};