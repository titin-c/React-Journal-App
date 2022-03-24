import React from 'react'
import{Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {isEmail} from 'validator';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

import Icon from "@mdi/react";
import {
  mdiAccountPlus,
  mdiLoginVariant
} from "@mdi/js";


export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector( state => state.ui );
  

  const [formValues, handleImputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
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
        <h1 className='auth__title mb-5'><Icon path={mdiAccountPlus} title="Register" size={1.5} /> <span>Register</span></h1>
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
            placeholder='Your name...' 
            name='name'
            autoComplete='off'
            className='auth__input border-bottom'
            value={name}
            onChange={handleImputChange}
          />
          <input 
            type="email" 
            placeholder='Your email...' 
            name='email'
            autoComplete='off'
            className='auth__input  border-bottom'
            value={email}
            onChange={handleImputChange}
          />
          <input 
            type="password" 
            placeholder='Your password...' 
            name='password'
            autoComplete='off'
            className='auth__input border-bottom mt-5'
            value={password}
            onChange={handleImputChange}
          />
          <input 
            type="password" 
            placeholder='Repeat your password...' 
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
         <Icon path={mdiLoginVariant} title="Register" size={.8} />
          <span>Already Registered?</span>
         </Link>
        </form>
    </>
  )
}
