import { useState } from 'react'

export const useForm = ( initialState = {} ) => {
  
    const [values, setvalues] = useState(initialState);

    const reset=( newFormState = initialState ) => {
        setvalues( newFormState );
    }

    //creamos la funcion de cambio de estado del input
    const handleInputChange = ({ target })=>{
        
        setvalues({
            ...values,
            [ target.name ]: target.value
        });
    }
    return [ values, handleInputChange, reset ];

}