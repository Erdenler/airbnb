import { React, useState, useEffect } from 'react'
import Cards from './Components/Cards'
import './Css/Home.css'
import './Css/Slider.css'
import './Css/Details.css'
import { GrLanguage } from 'react-icons/gr'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { IoSearchCircle, IoPersonCircle } from "react-icons/io5";





function Home() {

    return (
        <div className='home'>
            <div className='header'>
                <div className='header-left'>
                    <img className='header-icon' src='/assets/Airbnb-logo-.jpeg' alt='' />
                </div>
                <div className='header-center' style={{ position: 'relative' }}>

                    <label className='yer'>Herhangi bir yer</label>

                    <label className='hafta'>Herhangi bir hafta</label>

                    <label className='misafir' >Misafir ekleyin</label><s></s>



                    {<IoSearchCircle className='searchIcon' name='homeSearch' />}

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

            <div className='iconsBody'>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon'>Olağanüstü</span>
                </span>

                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>

                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>
                <span className='iconS'>
                    <AiFillHome />
                    <span className='descIcon' >Olağanüstü</span>
                </span>

            </div>

            <div className='home-section'>
                <Cards
                    src="https://miro.medium.com/max/4800/1*bBpqM7OrMm6Bwldy9jCq1g.png"
                    description="Fransız Alplerinin Le Villaret nköyünde bulunan bu chalet"
                    title="Fransa"
                    price="200₺" />

                <Cards src="https://miro.medium.com/max/4800/1*bBpqM7OrMm6Bwldy9jCq1g.png"
                    description="Fransız Alplerinin Le Villaret nköyünde bulunan bu chalet"
                    title="Fransa"
                    price="200₺" />

                <Cards src="https://miro.medium.com/max/4800/1*bBpqM7OrMm6Bwldy9jCq1g.png"
                    description="Fransız Alplerinin Le Villaret nköyünde bulunan bu chalet"
                    title="Fransa"
                    price="200₺" />

                <Cards src="https://miro.medium.com/max/4800/1*bBpqM7OrMm6Bwldy9jCq1g.png"
                    description="Fransız Alplerinin Le Villaret nköyünde bulunan bu chalet"
                    title="Fransa"
                    price="200₺" />
            </div>
            <div className='home-section'>
                <Cards
                    src="https://miro.medium.com/max/4800/1*bBpqM7OrMm6Bwldy9jCq1g.png"
                    description="Fransız Alplerinin Le Villaret nköyünde bulunan bu chalet"
                    title="Fransa"
                    price="200₺" />

                <Cards src="https://miro.medium.com/max/4800/1*bBpqM7OrMm6Bwldy9jCq1g.png"
                    description="Fransız Alplerinin Le Villaret nköyünde bulunan bu chalet"
                    title="Fransa"
                    price="200₺" />

                <Cards src="https://miro.medium.com/max/4800/1*bBpqM7OrMm6Bwldy9jCq1g.png"
                    description="Fransız Alplerinin Le Villaret nköyünde bulunan bu chalet"
                    title="Fransa"
                    price="200₺" />

                <Cards src="https://miro.medium.com/max/4800/1*bBpqM7OrMm6Bwldy9jCq1g.png"
                    description="Fransız Alplerinin Le Villaret nköyünde bulunan bu chalet"
                    title="Fransa"
                    price="200₺" />
            </div>
        </div>


    )
}

export default Home
