import React  from 'react';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';
import { useSelector } from 'react-redux';

export const JournalScreen = () => {


const { active } = useSelector( state => state.notes );




  return (
    <div 
      className="journal__main-content"
      id="outer-container">

      <Sidebar />
      <main id="page-wrap">
      
        {
          ( active )
            ? ( <NoteScreen /> )
            : ( <NothingSelected /> )
        }

      </main>
    </div>
  )
}
