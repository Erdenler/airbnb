import React from 'react'
import { Link } from 'react-router-dom'
import './CardsPhotos.css'


function Cards({ src, title, description, price }) {
    return (
        <div className='cards'  >
            <Link to={'/details'}> <img src={src} alt="" />
                <div className='card-info'>
                    <h2>{title} </h2>
                    <h4>{description} </h4>
                    <h3>{price} </h3>

                </div>
            </Link>
        </div>
    )
}

export default Cards
