import React from 'react'
import { ShopItem } from './ShopProduct'

function ListView({ items }) {
  let keyIndex = 0;
  return (
    <ul className="list-view">
      {items.map((e, index) => <ShopItem item={e} index={index}/>)}
    </ul>
  )
}

export default ListView