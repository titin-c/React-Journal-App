import React from 'react';
import Icon from "@mdi/react";
import { mdiMouse } from "@mdi/js";

export const NothingSelected = () => {
  return (
    <div className='nothing__main-content'>
        <p className='mb-5'>
            Select something
            <br />
            or create an entry!
        </p>
        <Icon path={mdiMouse} title="User" size={'50px'} />
        

    </div>
  )
}
