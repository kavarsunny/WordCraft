import React from 'react'
import { useState } from 'react'
import validator from 'validator'

const EmailCapture = () => {
  const [email, setEmail] = useState('')

  // Email validation built into handle email submit
  const handleEmailSubmit = () => {
    if(validator.isEmail(email) && email !== ''){
      console.log(email)
    } else{
      console.log('Please enter a valid email address.')
    }
  }




  return (
    <div className='bg-primary text-black text-center py-8 min-2'>
 
    </div>
  )
}

export default EmailCapture
