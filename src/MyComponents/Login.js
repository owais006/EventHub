import React, { useState } from 'react'

const Login = () => {
    const [userRegistration, setUserRegistration]= useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });
    const [records, setRecords]= useState([]);

    const handleInput=(e)=> {
        const name= e.target.name;
        const value = e.target.value;
        console.log(name,value);

        setUserRegistration({...userRegistration, [name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const newRecord={...userRegistration, id : new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setUserRegistration({username:"", email:"",phone:"",password:""});
    }


  return (
    <>
    <form action='' onSubmit={handleSubmit}>
        <div className='Logo'>
            <label htmlFor='username' >Fullname</label>
            <br/>
            <input className='Log' type="text" autoComplete='off'
            value={userRegistration.username}
            onChange={handleInput}
            name="username" id="username"/>
        </div>

        <div className='Logo'>
            <label htmlFor='email'>email</label>
            <br/>
            <input className='Log' type="text" autoComplete='off'
            value={userRegistration.email}
            onChange={handleInput}
            name="email" id="email"/>
        </div>

        <div className='Logo'>
            <label htmlFor='phone' >phone</label>
            <br/>
            <input className='Log' type="text" autoComplete='off'
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone" id="phone"/>
        </div>

        <div className='Logo'>
            <label htmlFor='password' >password</label>
            <br/>
            <input className='Log' type="text" autoComplete='off'
            value={userRegistration.password}
            onChange={handleInput}
            name="password" id="password"/>
        </div>
        <div className='Logo'>
        <button type="submit">Registration </button>
        </div>
        
    </form>
    <div className='Lo'>
        {
        records.map((CurElem)=> {
            return(
                <div>
                    <p>{CurElem.username}</p>
                    <p>{CurElem.email}</p>
                    <p>{CurElem.phone}</p>
                    <p>{CurElem.password}</p>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Login
