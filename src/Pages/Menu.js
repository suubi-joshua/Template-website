import React from 'react'
import { MenuList } from '../helpers/MenuList'
import FoodItem from '../Components/foodItem'
import '../Styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'> Our Menu </h1>
      <div className='search'>
        {/* Search button */}
        <label htmlFor="search"></label>
        <input id="search" type="search" placeholder="Search for stuff ..." />
        <button type="submit-search">Go</button>    
        
      </div>
      <div className='menuList'>
          {MenuList.map((foodItem, key) => {
            return (
              <div key={key}>
                <FoodItem
                name={foodItem.name}
                image={foodItem.image}
                price={foodItem.price}
              />
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default Menu
