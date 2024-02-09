import React from 'react'
import homeImg from '../assets/Home.png';
import Navbar from './Navbar';
import { useAuth } from '../store/auth';

const Home = () => {
    const { content } = useAuth();
  
        const heading = content[0] ? content[0].heading : '';
        const title = content[0] ? content[0].title : '';
        const contentText = content[0] ? content[0].content : '';

    return (
        <>
            <Navbar class="home" />
            <div className='home-conatiner' style={{ margin: "100px 0" }}>
                <div className='head-container'>
                    <p className='txt-1'>
                        <b style={{ color: "#FF0000", fontSize: "60px", fontWeight: "800" }}>{heading}:</b>
                        <br />
                        {title}
                    </p>
                </div>
                <div className='text-container'>
                    <p className='txt-2'>
                        {contentText}
                    </p>
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
    margin:0;
    padding:0;
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
    font-weight:800px;
    margin:0 50px;
}
.text-container{
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:50%;
    margin: 30px 0 0 600px;
}
.txt-2{
    color:white;
    font-size:36px;
    font-weight:500;
    text-wrap:wrap;
    text-align:center;
}
          `}
                </style>
            </div>
        </>
    )
}

export default Home