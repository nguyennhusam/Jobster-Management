import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo } from '../components';
import FormRow from '../components/FormRow';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from '../features/user/userSlice';
import logoRegister from '../assets/images/logoRegister.svg'
import { styled } from 'styled-components';



const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};


function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);

  return (
    <main>
      <form className='form' onSubmit={onSubmit}>
        <img src={logoRegister} alt='jobster logo' className='logo-register' />
        <h3 className='h3-register'>{values.isMember ? 'Login' : 'Register'}</h3>

        {/* name field */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />

        {/* password field */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          style={{ marginBottom: '0' }}
        />
        <p className='btn-member-register'>
          <span className='left-text'>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          </span>

          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>

        <button type='submit' className='btn btn-block-register' disabled={isLoading}>
          {isLoading ? 'loading...' : 'submit'}
        </button>

      </form>
    </main>
  )
}

export default Register
