import React, { useRef, useState } from 'react'

function UseEffect() {
   const [form, setForm]= useState({
        name:"", 
        email:""
    })
    const usingUseRef= useRef(null);

    const HandleFunction=()=>{
        usingUseRef.current.value="Enter Your Name";
    }

    const ChangeFunction=(e)=>{
        const {name, value}=e.target;
        setForm({...form, [name]:value});
    }
  return (
    <>
        <div className="container pt-5">
            <input className='form-control' name='name' value={form} ref={usingUseRef} onChange={ChangeFunction} placeholder='User' />
            
            <button className='btn btn-danger mt-2' onClick={HandleFunction}>Click Here</button>
        </div>
    </>
  )
}

export default UseEffect