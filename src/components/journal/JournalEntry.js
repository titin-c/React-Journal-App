import React from 'react';
import Icon from "@mdi/react";
import {
    mdiCamera
} from "@mdi/js";
import moment from 'moment';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

export const JournalEntry = ({id, date, title, body, url}) => {
    
    const noteDate = moment(date);
    
    const dispatch = useDispatch();

    const handleEntryClick = ()=>{
        dispatch(
          activeNote(id,{
            date, title, body, url
          })
          
        );
        
    }

  return (
    <div 
        className='journal__entry pointer border-bottom'
        onClick={ handleEntryClick }
    >
        {
            url ?
                <div 
                    className='journal__entry-picture'
                    style={{
                        backgroundImage: `url(${ url })`
                    }}
                ></div>
            :
                <div 
                    className='journal__entry-picture'
                    
                ><Icon path={mdiCamera} title="User" size={.8} /></div>
        }
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                { title }
            </p>
            
            <p className='journal__entry-content'>
                { body }
            </p>
        </div>
        <div className='journal__entry-date-box'>
            <span>{ noteDate.format('ddd') }</span>
            <h4>{ noteDate.format('Do') }</h4>
        </div>
    </div>
  )
}
