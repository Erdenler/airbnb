import React from 'react'
import Home from './Home'
import { GrLanguage } from 'react-icons/gr'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoSearchCircle, IoPersonCircle } from "react-icons/io5";
import './Css/Home.css'
import './Css/Slider.css'
import './Css/Details.css'


function Details() {
    return (
        <div className='details'>
            <div className='header'>
                <div className='header-left'>
                    <img className='header-icon' src='/assets/Airbnb-logo-.jpeg' alt='' />
                </div>
                <div className='searchBar' style={{ position: 'relative' }}>
                    <input type='text' placeholder='Aramanıza başlayın' />
                    <div className='iconSearch' style={{ position: 'absolute' }}> <IoSearchCircle name='detailsSearch' style={{ width: '32px', height: '32px' }} /> </div>

                </div>
                <div className='header-right'>
                    <p className='evSahibi'>Ev sahibi olun</p>

                    <GrLanguage className='iconLang' />
                    <p className='rightIcons'>
                        <AiOutlineMenu className='iconMenu' />
                        <IoPersonCircle className='iconProfile' />
                    </p>

                </div>
            </div>
            <div className='place-details'>
                <h1>description </h1>
            </div>
            <div> <img className='details1' src="https://miro.medium.com/max/4800/1*bBpqM7OrMm6Bwldy9jCq1g.png" /> <img className='details2' src="https://miro.medium.com/max/4800/1*bBpqM7OrMm6Bwldy9jCq1g.png" /> <img className='details3' />
            </div>
            <div className='middle-left'>
                <div className='description-details'>
                    sweet home
                </div>
                <div className='details-info'></div>
                <div className='aircover'></div>
                <div className='about'></div>
                <div className='place-features'></div>
            </div>
            <div className='middle-right'>
                <div className='reserv-bar'>
                    reservation
                </div>
            </div>
            <div className='comments'>comments</div>
        </div>
    )
}

export default Details
