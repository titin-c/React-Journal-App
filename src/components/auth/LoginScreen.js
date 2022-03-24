import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import{Link} from 'react-router-dom';
import {  startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import Icon from "@mdi/react";
import {
  mdiLoginVariant,
  mdiAccountPlus
} from "@mdi/js";

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const {loading} = useSelector( state => state.ui );

const [formValues, handleImputChange] = useForm({
  email: '',
  password: ''
});

const{email, password}= formValues;
const handleLogin = (e)=>{
  e.preventDefault();
  dispatch( startLoginEmailPassword(email, password) );
}

const handleGoogleLogin = ()=>{
  dispatch(startGoogleLogin());
}

  return (
    <>
        <h1 className='auth__title mb-5'><Icon path={mdiLoginVariant} title="Login" size={1.5} /> <span>Login</span></h1>
        <form onSubmit={handleLogin}> 
          <input 
              type="text" 
              placeholder='Your email...' 
              name='email'
              autoComplete='off'
              className='auth__input border-bottom'
              value={email}
              onChange={handleImputChange} 
          />
          <input 
              type="password" 
              placeholder='Your password...' 
              name='password'
              autoComplete='off'
              className='auth__input border-bottom'
              value={password}
              onChange={handleImputChange}
          />
          <button 
              type="submit"
              className='btn btn-secondary btn-block'
              disabled={loading}
          > 
              { loading? 'Loading...' : 'Login' }
          </button>
          <hr className='border-bottom'/>
         <div className='auth__social-networks'>
              <p>Login with Social Networks</p>
              <div 
                    className="google-btn"
                    onClick={handleGoogleLogin}
               >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
        </div>
         <Link to="/auth/register" className='link'>
         <Icon path={mdiAccountPlus} title="Register" size={.8} />
          <span>Create New Acccount</span>
         </Link>
        </form>
    </>
  )
}
