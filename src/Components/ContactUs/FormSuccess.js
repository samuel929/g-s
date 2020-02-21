import React from 'react'

export default function FormSuccess({nextStep,prevStep}) {


  const Continue=e=>{
        e.preventDefault();
        nextStep();     
    }

    const Back=e=>{
        e.preventDefault();
        prevStep();
    }
    
    return (
        <div>
            <h1>Success!!</h1>
        </div>
    )
}
