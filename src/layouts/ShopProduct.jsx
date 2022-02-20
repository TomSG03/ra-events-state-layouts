import React from 'react'

export function ShopCard({ item, index }) {
  return (
    <div className="shop-card">
      <div className="item-img"><img src={item.img} alt="item.name" /></div>
      <div className="name">{item.name}</div>
      <div className="color">{item.color}</div>
      <div className="price">{item.price}</div>
      <button className="add-btn">add to card</button>
    </div>
  )
}

export function ShopItem({ item, index }) {
  console.log(index);
  return (
    <li key={index} className="shop-item">
      <div className="item-img"><img src={item.img} alt="item.name" /></div>
      <div className="name">{item.name}</div>
      <div className="color">{item.color}</div>
      <div className="price">{item.price}</div>
      <button className="add-btn">add to card</button>
    </li>


  )
}

