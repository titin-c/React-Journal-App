import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries';
import { handleIsOpen, startNewNote } from '../../actions/notes';


import Icon from "@mdi/react";
import {
  mdiAccountCircleOutline,
  mdiLogoutVariant,
  mdiCalendarPlus,
  mdiWindowClose,
  mdiMenu
} from "@mdi/js";


export const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();

  const { name } = useSelector( state => state.auth );

  const handleLogout =()=>{
    dispatch(startLogout())
  }

  const handleAddNewEntry =()=>{
    dispatch( startNewNote() );
  }

  return (
    <aside 
      className={`journal__sidebar ${isOpen ? ('open') : ('closed')}`}
    >
        <div
          className='journal__sidebar-burguer-icon'
          onClick={() => setIsOpen(!isOpen)}
        >{
          isOpen 
            ? (<Icon path={mdiWindowClose} title="close menu" size={1.5} />) 
            : (<Icon path={mdiMenu} title="open menu" size={1.5}  />)
        }
          
        </div>
        <div className='journal__sidebar-navbar  mb-5'>
            <h3 >
                <Icon path={mdiAccountCircleOutline} title="User" size={1.5} />
                <span> {name}</span>
            </h3>
            <button className='btn btn-flex' onClick={handleLogout}>
            <Icon path={mdiLogoutVariant} title="User" size={.8} />
            <span>Logout</span></button>
        </div>
        
        <JournalEntries />
        <div 
          className='btn btn-flex journal__new-entry'
          onClick={ handleAddNewEntry }
        >
        <Icon path={mdiCalendarPlus} title="New entry" size={1.5} />
            <div>
              <div>New entry</div>
              <small>Add a new journal entry</small>
            </div>

        </div>      
    </aside>
  )
}
