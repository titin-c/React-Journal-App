import React from 'react'
import{Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {isEmail} from 'validator';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector( state => state.ui );
  

  const [formValues, handleImputChange] = useForm({
    name: 'Titín',
    email: 'titin@gmail.com',
    password: '123456',
    password2: '123456'
  });

  const{name, email, password, password2}= formValues;

  const handleRegister = (e)=>{
    e.preventDefault();

    if(isFormValid()){
      dispatch( startRegisterWithEmailPasswordName(email, password, name) );
    }
  }

  const isFormValid =()=>{
    if(name.trim().length === 0 ){
      dispatch(setError('El nombre es requerido'));
      return false;
    }
    else if(!isEmail(email) ){
      dispatch(setError('El email no es valido'));
      return false;
    }
    else if(password !== password2 || password.length < 5){
      dispatch(setError('contraseña con errores'));
      return false;
    }

    dispatch(removeError())
    return true;
  }

  return (
    <>
        <h1 className='auth__title mb-5'>Registro</h1>
        <form onSubmit={handleRegister}> 
        {
          msgError &&
          (
            <div className='auth__alert-error'>
              {msgError}
            </div>
          )
        }
        <input 
            type="text" 
            placeholder='Tu nombre...' 
            name='name'
            autoComplete='off'
            className='auth__input border-bottom'
            value={name}
            onChange={handleImputChange}
          />
          <input 
            type="email" 
            placeholder='Tu correo electrónico...' 
            name='email'
            autoComplete='off'
            className='auth__input  border-bottom'
            value={email}
            onChange={handleImputChange}
          />
          <input 
            type="password" 
            placeholder='Tu contraseña...' 
            name='password'
            autoComplete='off'
            className='auth__input border-bottom mt-5'
            value={password}
            onChange={handleImputChange}
          />
          <input 
            type="password" 
            placeholder='Repite tu contraseña...' 
            name='password2'
            autoComplete='off'
            className='auth__input border-bottom'
            value={password2}
            onChange={handleImputChange}
          />
          <button 
            type="submit"
            className='btn btn-secondary btn-block mb-5'
          >Register</button>
          
         
         <Link to="/auth/login" className='link'>
          Already Registered?
         </Link>
        </form>
    </>
  )
}
