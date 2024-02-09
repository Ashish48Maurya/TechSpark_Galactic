import React from 'react';
import Navbar from './Navbar';
import homeImg from '../assets/Files.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';


const Files = () => {
    const { content } = useAuth();
  
    const heading = content[1] ? content[1].heading : '';
    const title = content[1] ? content[1].title : '';
    const contentText = content[1] ? content[1].content : '';
    const navigate = useNavigate();
    const toUpload = () => {
        navigate( '/upload' );
    }
    return (
        <>
            <Navbar class="files" />
            <div className='home-conatiner' style={{ margin: "100px 0" }}>
                <div className='head-container'>
                    <p className='txt-1'>
                        <b style={{ color: "#FF0000", fontSize: "60px" }}>{heading}:</b>
                        <br />
                        {title}
                    </p>
                </div>
                <div className='text-container'>
                    <p className='txt-2'>
                        {contentText}
                    </p>
                    <button onClick={toUpload}>Explore More</button>
                </div>
                <style>
                    {`
                *{
                    font-family: 'Montserrat', sans-serif;
                }
          body {
  background-image: url('${homeImg}');
  background-size: 100%;
  background-repeat: no-repeat;
  overflow:hidden;
}
.home-conatiner{
    display:flex;
    flex-direction:column;
    text-align:center;
}
.head-container{
    display:flex;
    justify-content:flex-end;
    align-items:center;
}
.txt-1{
    color:white;
    text-align:center;
    font-size:50px;
    font-weight:900;
    margin:0 50px;
}
.text-container{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:50%;
    margin: 30px 0 0 700px;
}
.txt-2{
    color:white;
    font-size:36px;
    font-weight:500;
    text-wrap:wrap;
    text-align:center;
}
.text-container button{
    color:white;
    background-color:red;
    font-weight:100;
    padding:20px;
    border-radius: 10px;
    border:none;
    cursor:pointer;
}
          `}
                </style>
            </div>
        </>
    )
}

export default Files