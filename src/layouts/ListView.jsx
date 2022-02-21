import React from 'react'
import { ShopItem } from './ShopProduct'

function ListView({ items }) {
  return <>
    {items.map((e, index) => <ShopItem item={e} key={index.toString()}/>)}
  </>   
}

export default ListView