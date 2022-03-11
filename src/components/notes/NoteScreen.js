import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, handlePictureClick, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import Icon from "@mdi/react";
import {
  mdiImage,
  mdiTrashCan
} from "@mdi/js";


export const NoteScreen = () => {

  const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title, id } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {
        
        if ( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) );

    }, [formValues, dispatch])


    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }
  
  

  return (
    <div className='notes__main-content'>
      
      <NotesAppBar />

    <div className='notes__content'>
      <form>
        <input
          type="text"
          placeholder="Some awesome Title"
          className="notes__title-input"
          name="title"
          value={ title }
          onChange={ handleInputChange } /> 
        <textarea
            placeholder="what happened today?"
            className="notes__textarea"
            name="body"
            value={ body }
            onChange={ handleInputChange }
            ></textarea>
      </form>
      <div className='notes__image'>
    {
      note.url ?
        <div>
            <p><b>Imagen destacada:</b></p>
            <img 
              src={ note.url } 
              alt={ title }/>
        </div>
        :
        <button 
              className='btn btn-outline btn-flex'
              onClick={ handlePictureClick }
            >
            <Icon path={mdiImage} title="Add picture" size={.8} />
            <span>Upload Picture</span>
         </button>
            
        
    }
    <button
      className='btn btn-outline btn-flex btn-delete mt-5'
      onClick={ handleDelete }
    
    >
      <Icon path={mdiTrashCan} title="Delete Entry" size={.8} />
      <span>Delete entry</span>
    </button>
    </div>
    
    </div>
    </div>
  )
}
