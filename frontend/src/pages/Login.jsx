import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { scrollToTop } from '../helpers/scrollToTop';

const Login = () => {

    const [state, setState] = useState("Login");
    const [checkBox, setCheckBox] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    })

    const CheckClick = () => {
      setCheckBox(!checkBox);
    }

    const ChangeFormData = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    const ChangeLogin = async() => {
      let responsedata;
      await fetch('http://localhost:4000/login', {
        method: "POST",
        headers:{
          Accept: 'application/formData',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json()).then((data) => responsedata = data);
      if(responsedata.success){
        localStorage.setItem('auth-token', responsedata.token);
        window.location.replace('/');
      }
      else{
        alert(responsedata.errors)
      }
    }

    const ChangeSignUp = async() => {
      let matchpassword = formData.password === formData.confirmpassword;
      if(matchpassword){
        let responsedata;
        await fetch('http://localhost:4000/signup', {
          method: "POST",
          headers:{
            Accept: 'application/formData',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responsedata = data);
        if(responsedata.success){
          localStorage.setItem('auth-token', responsedata.token);
          window.location.replace('/');
        }
        else{
          alert(responsedata.errors)
        }
      }
    }

    const Login = () => {
        setState("Login");
        scrollToTop();
    }

    const SignUp = () => {
        setState("Sign Up");
        scrollToTop();
    }

  return (
    <div className='flex items-center justify-center p-20 bg-cardColor max-sm:px-2'>
      <div className='flex flex-col gap-5 rounded-xl bg-white p-8 max-w-full'>
        <h2 className='text-3xl font-bold text-customText cursor-default'>{state}</h2>
        <div className='flex flex-col gap-5'>
           {state === "Sign Up"?( <div className='flex flex-col gap-5'>
                <label htmlFor="name" className='text-xl font-bold text-customText'>Name:</label>
                <input onChange={ChangeFormData} type="text" value={formData.name} name='name' placeholder='Your name'  className='w-[30rem] h-[40px] ring-2 ring-customText pl-3 rounded-lg max-md:w-[23rem]' />
            </div>):("")}
           <div className='flex flex-col gap-5'>
                <label htmlFor="email" className='text-xl font-bold text-customText'>Email:</label>
                <input onChange={ChangeFormData} type="email" value={formData.email} name='email' placeholder='Email' className='w-[30rem] h-[40px] ring-2 ring-customText pl-3 rounded-lg max-md:w-[23rem]' />
           </div>
           <div className='flex flex-col gap-5'>
                <label htmlFor="password" className='text-xl font-bold text-customText'>Password:</label>
                <input onChange={ChangeFormData} type="password" value={formData.password} name='password' placeholder='Password' className='w-[30rem] h-[40px] ring-2 ring-customText pl-3 rounded-lg max-md:w-[23rem]' />
           </div>
           {state === "Sign Up"?(<div className='flex flex-col gap-5'>
                <label htmlFor="confirmpassword" className='text-xl font-bold text-customText'>Confirm Password:</label>
                <input onChange={ChangeFormData} type="password" value={formData.confirmpassword} name='confirmpassword' placeholder='Password' className='w-[30rem] h-[40px] ring-2 ring-customText pl-3 rounded-lg max-md:w-[23rem]' />
           </div>):("")}
        </div>
        <div className='flex gap-3'>
           <input type="checkbox" name='check' onClick={CheckClick} />
           <label htmlFor="check" className='text-base text-customText font-bold max-md:w-[23rem]'>By continuing, i gree to the terms of use & privacy policy.</label>
        </div>
        <div>
            <button onClick={() => {(state === "Login" && checkBox === true)?ChangeLogin():ChangeSignUp()}} className='bg-customText ring-2 ring-customText text-white font-bold px-10 py-2 rounded-xl hover:bg-backgroudColor hover:text-customText'>
                {state}
            </button>
        </div>
        <div>
            {state === "Login"?(<p className='text-customText text-base cursor-default'>Don't have an account? <span className='font-bold cursor-pointer' onClick={SignUp}>Sign Up</span></p>):(<p className='text-customText text-base cursor-default'>Already have an account? <span className='font-bold cursor-pointer' onClick={Login}>Login</span></p>)}
        </div>
        <div className='flex flex-col gap-5'>
            <p className='text-customText text-base cursor-default'>Or continue with: </p>
            <p className='flex gap-5 text-3xl text-customText cursor-pointer'><FaLinkedin /><FaInstagramSquare /><FaFacebookSquare /><FaTwitterSquare /></p>
        </div>
      </div>
    </div>
  )
}

export default Login
