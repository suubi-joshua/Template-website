import React from 'react'
import { MenuList } from '../helpers/MenuList'
import FoodItem from '../Components/foodItem'
import '../Styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'> Our Menu </h1>
      {/* Going throught a list of food items at the resturant */}
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
