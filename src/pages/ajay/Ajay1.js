import React, { useContext } from 'react'
import { MyContext } from '../forget pass/ForgotPassword'

const Ajay1 = () => {
  const user = useContext(MyContext);

  return (
    <div>
        <h1>Name:{user.name}</h1> 
    </div>
  )
}

export default Ajay1