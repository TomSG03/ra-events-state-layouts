import React from 'react'

export function ShopCard({ item }) {
  return (
    <div className="shop-card">
      <div className="item-img"><img src={item.img} alt="item.name" /></div>
      <div className="content">
        <div className="name">{item.name}</div>
        <div className="color">{item.color}</div>
      </div>
      <div className="footer">
        <div className="price">${item.price}</div>
        <button className="add-btn">add to card</button>
      </div>
    </div>
  )
}

export function ShopItem({ item }) {
  return (
    <div className="shop-item">
      <div className="item-img"><img src={item.img} alt="item.name" /></div>
      <div className="name">{item.name}</div>
      <div className="color">{item.color}</div>
      <div className="price">${item.price}</div>
      <button className="add-btn">add to card</button>
    </div>
  )
}

