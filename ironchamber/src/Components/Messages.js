import React from 'react';
import Navbar from './Navbar';
import homeImg from '../assets/Messages.png';
import { useAuth } from '../store/auth';

const Messages = () => {
    const { content } = useAuth();
  
    const heading = content[2] ? content[2].heading : '';
    const title = content[2] ? content[2].title : '';
    const contentText = content[2] ? content[2].content : '';
    return (
        <>
            <Navbar class="messages" />
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
                    <button>Explore More</button>
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
    width:60%;
    margin: 30px 0 0 600px;
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

export default Messages