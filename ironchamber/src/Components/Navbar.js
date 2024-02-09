import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Navbar = (props) => {
   const {setLanguage, language} = useAuth();

    useEffect(() => {
        const searchBox = document.querySelector(".search-box");
        const searchBtn = document.querySelector(".search-icon");
        const cancelBtn = document.querySelector(".cancel-icon");
        const searchInput = document.querySelector("input");
        const searchData = document.querySelector(".search-data");

        const handleSearchClick = () => {
            searchBox.classList.add("active");
            searchBtn.classList.add("active");
            searchInput.classList.add("active");
            cancelBtn.classList.add("active");
            searchInput.focus();
            if (searchInput.value !== "") {
                var values = searchInput.value;
                searchData.classList.remove("active");
                searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
            } else {
                searchData.textContent = "";
            }
        };

        const handleCancelClick = () => {
            searchBox.classList.remove("active");
            searchBtn.classList.remove("active");
            searchInput.classList.remove("active");
            cancelBtn.classList.remove("active");
            searchData.classList.toggle("active");
            searchInput.value = "";
        };

        searchBtn.addEventListener('click', handleSearchClick);
        cancelBtn.addEventListener('click', handleCancelClick);

        // Cleanup event listeners when the component unmounts
        return () => {
            searchBtn.removeEventListener('click', handleSearchClick);
            cancelBtn.removeEventListener('click', handleCancelClick);
        };
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    useEffect(() => {
        const optionMenu = document.querySelector(".select-menu");
        const selectBtn = optionMenu.querySelector(".select-btn");
        const options = optionMenu.querySelectorAll(".option");
        const sBtn_text = optionMenu.querySelector(".sBtn-text");

        const handleSelectBtnClick = () => {
            optionMenu.classList.toggle("active");
        };

        const handleOptionClick = (option) => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;

            optionMenu.classList.remove("active");
        };

        selectBtn.addEventListener("click", handleSelectBtnClick);

        options.forEach(option => {
            option.addEventListener("click", () => handleOptionClick(option));
        });

        // Cleanup event listeners when the component unmounts
        return () => {
            selectBtn.removeEventListener("click", handleSelectBtnClick);
            options.forEach(option => {
                option.removeEventListener("click", () => handleOptionClick(option));
            });
        };
    }, []); // Empty dependency array ensures this effect runs once when the component mounts
   
    return (
        <>
            <div className='nav-container'>
                <nav className='my-nav'>
                    <ul>
                        <li className='home'><Link to='/'>HOME</Link></li>
                        <li className='files'><Link to='/files'>FILES</Link></li>
                        <li className='messages'><Link to='/messages'>MESSAGES</Link></li>
                        <li className='language'>
                            <div className="select-menu">
                                <div className="select-btn">
                                    <span className="sBtn-text">Select Language</span>
                                    <i className="bx bx-chevron-down"></i>
                                </div>

                                {/* <ul className="options"> */}
                                    <select value={language} onChange={(e) => { setLanguage(e.target.value) }}>
                                        <option value="English">English</option>
                                        <option value="Marathi">Marathi</option>
                                        <option value="Hindi">Hindi</option>
                                        <option value="Gujarati">Gujarati</option>
                                    </select>
                                {/* </ul> */}

                            </div>
                        </li>
                        <li style={{ color: "white", fontSize: "30px" }}>|</li>
                        <li>
                            <div className="search-box">
                                <input type="text" placeholder="Type to search.." />
                                <div className="search-icon">
                                    <i className="fa fa-search"></i>
                                </div>
                                <div className="cancel-icon">
                                    <i className="fa fa-times"></i>
                                </div>
                                <div className="search-data"></div>
                            </div>
                        </li>
                        <li className='user'>
                            <img src='https://www.postendekker.nl/wp-content/uploads/2021/10/dummy-profile.jpg' alt="User Avatar" />
                            <span>
                                <ul className='user-list'>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                    <li><Link to='/logout'>Logout</Link></li>
                                </ul>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
            <style>
                {`

                @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    background-color: #74EBD5;
    background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
}

.user-list {
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.8);
    top:170px;
    border: none;
    border-radius: 10px;
    right: 20px;
    opacity: 0;  /* Start with opacity set to 0 */
    animation: fadeInOut 0.3s ease-in-out;  /* Use keyframe animation */
}

.user-list::before {
    content: "";
    position: absolute;
    top: -28.5px; /* Adjust the distance from the top of the dropdown */
    left: 48%; /* Center the arrow horizontally */
    margin-left: -45px; /* Half of the arrow width */
    border: 15px solid rgba(255, 255, 255, 0.8); /* Adjust the size of the arrow */
    outline:none;
    border-style: solid;
    border-color: transparent transparent rgba(255, 255, 255, 0.8) transparent;
}

.user:hover .user-list,
.user:focus .user-list,
.user-list:hover,
.user-list:focus {
    display: flex;
    opacity: 1;  /* Set opacity to 1 on hover or focus */
}

@keyframes fadeInOut {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}


.select-menu {
    max-width: 330px;
    margin: 50px auto;
}

.select-menu .select-btn {
    display: flex;
    height: 55px;
    background: red;
    color:#fff;
    padding: 20px;
    font-size: 18px;
    font-weight: 400;
    border-radius: 8px;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.select-menu .options {
    position: absolute;
    width: 330px;
    overflow-y: auto;
    max-height: 295px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    animation-name: fadeInDown;
    -webkit-animation-name: fadeInDown;
    animation-duration: 0.35s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.35s;
    -webkit-animation-fill-mode: both;
}

.select-menu .options .option {
    display: flex;
    height: 55px;
    cursor: pointer;
    padding: 0 16px;
    border-radius: 8px;
    align-items: center;
    background: #fff;
}

.select-menu .options .option:hover {
    background: #f2f2f2;
}

.select-menu .options .option i {
    font-size: 25px;
    margin-right: 12px;
}

.select-menu .options .option .option-text {
    font-size: 18px;
    color: #333;
}

.select-btn i {
    font-size: 25px;
    transition: 0.3s;
}

.select-menu.active .select-btn i {
    transform: rotate(-180deg);
}

.select-menu.active .options {
    display: block;
    opacity: 0;
    z-index: 10;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
    animation-duration: 0.4s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
}

@keyframes fadeInUp {
    from {
        transform: translate3d(0, 30px, 0);
    }

    to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

@keyframes fadeInDown {
    from {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }

    to {
        transform: translate3d(0, 20px, 0);
        opacity: 0;
    }
}

::selection {
    color: #fff;
    background: #664AFF;
}

.search-box {
    position: relative;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, .2);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.search-box.active {
    width: 350px;
}

.search-box input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 50px;
    background: #fff;
    outline: none;
    padding: 0 60px 0 20px;
    font-size: 18px;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.search-box input.active {
    opacity: 1;
}

.search-box input::placeholder {
    color: #a6a6a6;
}

.search-box .search-icon {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    height: 60px;
    width: 60px;
    background: red;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
    font-size: 22px;
    color: white;
    cursor: pointer;
    z-index: 1;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.search-box .search-icon.active {
    right: 5px;
    height: 50px;
    line-height: 50px;
    width: 50px;
    font-size: 20px;
    background: white;
    color: red;
    transform: translateY(-50%) rotate(360deg);
}

.search-box .cancel-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.search-box .cancel-icon.active {
    right: -40px;
    transform: translateY(-50%) rotate(360deg);
}

.search-box .search-data {
    text-align: center;
    padding-top: 7px;
    color: #fff;
    font-size: 18px;
    word-wrap: break-word;
}

.search-box .search-data.active {
    display: none;
}

                a{
                    font-size:25px;
                    font-weight:600;
                    color:white;
                    text-decoration:none;
                }
                ul,li{
                    list-style-type:none;
                }
                .nav-container{
                    display:flex;
                    justify-content:flex-end;
                    align-items:center;
                    margin: 20px 100px;
                }
                nav ul{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                ul{
                    width:max-content;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                li{
                    margin:20px;
                }
                .${props.class} a{
                    color:#E60F0F;
                }
                li img{
                    border:none;
                    border-radius:50%;
                    width:50px;
                    cursor:pointer;
                }
                `}
            </style>
        </>
    );
}

export default Navbar;

// https://gosnippets.com/snippets/custom-dropdown-select-menu