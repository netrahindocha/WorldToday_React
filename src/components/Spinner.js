import React from 'react'
import loading from "./loading.gif";

let Spinner = () => {

  return (
    <div className='text-center'>
      <img src={loading} alt="loading" className='my-5' />
    </div>
  )

}

export default Spinner
