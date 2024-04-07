import React from 'react'
import CardItem from './Pages/CardItem'
import './Card.css'

function Card() {
  return (
    <div className='cards'>
      <h1>Check out these Football News!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/georgia-news.jpg'
              text='Georgia breakthrough years in the making'
              label='News'
              path='/posts'
            />
            <CardItem
              src='images/portuguese-news.jpg'
              text='Six games to look out for'
              label='News'
              path='/posts'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/trophytourannouncement.jpg'
              text='Trophy Tour dates announced'
              label='News'
              path='/posts'
            />
            <CardItem
              src='images/qualifired-teams.jpg'
              text='Check out qualifired teams in UEFA EURO 2024'
              label='News'
              path='/posts'
            />
            <CardItem
              src='images/group_c.jpg'
              text='EURO 2024 Group C in_depth'
              label='News'
              path='/posts'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
