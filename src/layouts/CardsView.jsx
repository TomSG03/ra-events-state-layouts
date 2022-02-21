import React from 'react'
import { ShopCard } from './ShopProduct'

function CardsView({cards}) {
  return (
    <div className="card-view">
      {cards.map((e, index) => <ShopCard item={e} key={index.toString()}/>)}
    </div>
  )
}

export default CardsView