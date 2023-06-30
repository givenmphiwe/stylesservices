import React from 'react';
import "./styles/Barmanintro.css";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Barman from "./assets/barman.jpg"

export const BarmanIntro = () => {
  return (
    <div className='sect'>
        <div className='containa'>
            <div className='content-sect'>
                <div className='titl'>
                    <h1>Barman Training</h1>
                </div>

                <div className='contety'>
                    <h3>Lorem ipsum</h3>

                    <p>Lorem ipsum</p>

                    <div className='strt-btn'>
                        <a>Start</a>
                    </div>
                </div>
                <div className='icons-medi'>
                    <a href='#'><FaFacebook/></a>
                    <a href='#'><FaTwitter/></a>
                    <a href='#'><FaInstagram/></a>
                </div>
            </div>
            <div className='image-sec'>
                <img src={Barman}/>
            </div>
        </div>
    </div>
  )
}
