import React from 'react'
import { useNavigate } from 'react-router-dom'
import uploadImg from '../assets/Pay.png'
import Navbar from './Navbar';

const Upload = () => {
    return (
        <>
            <Navbar class="files" />
            <div className='upload-container'>
            </div>
            <style>
                {`
                    *{
                    font-family: 'Montserrat', sans-serif;
                }
          body {
  background-image: url('${uploadImg}');
  background-size: 100%;
  background-repeat: no-repeat;
  overflow:hidden;
}
              `}
            </style>
        </>
    )
}

export default Upload