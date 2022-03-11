import React from 'react';
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

export const WaitingPage = () => {
  return (
    <div className='auth__main'>
        <div className='auth__please'>Please Wait...</div>
        <div className='auth__please'>
            <Icon path={mdiLoading} title="User" size={'50px'} spin={1}/>
        </div>
    </div>
  )
}
