import React from 'react';
import Icon from "@mdi/react";
import {
  mdiContentSave,
  mdiImage,
  mdiCalendarMonthOutline
} from "@mdi/js";
import { startSaveNote, startUploading, handlePictureClick } from '../../actions/notes';
import { useDispatch, useSelector } from 'react-redux';

export const NotesAppBar = () => {

  const dispatch = useDispatch();

  const { active } = useSelector( state => state.notes );

  const handleSave = () => {
    dispatch( startSaveNote(active) )
}

const handleFileChange = (e)=>{
  const file = e.target.files[0];
  if(file){
    dispatch( startUploading( file ) );
  }
}


  return (
    <div className='notes__appbar'>
        <div className='btn-flex'>
          { /*  <Icon path={mdiCalendarMonthOutline} title="date" size={.9} />
          <b>28 Agosto 2020</b> */ }
          <input 
            id="fileSelector" 
            type="file" 
            style={{display:'none'}}
            onChange={ handleFileChange}
          ></input>

        </div>
        <div className='btn-flex'>
            <button 
              className='btn btn-outline btn-flex'
              onClick={ handlePictureClick }
            >
            <Icon path={mdiImage} title="Add picture" size={.8} />
            <span>Picture</span>
            </button>
            <button 
              className='btn btn-secondary btn-flex'
              onClick={ handleSave }
            >
            <Icon path={mdiContentSave} title="Save entry" size={.8} />
              <span>Save entry</span>
            </button>
        </div>

    </div>
  )
}