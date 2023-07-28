import React, { useCallback, useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  // const [isAll, setIsAll] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  function handleSelectValue(value){
    setSelectedCategory(value)

  }
  const filtered = items.filter((item) => {if(item.category === selectedCategory){
    return item
  }})


  function itemsCollumn(){
    return items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))
  }
  return (
    <div className="ShoppingList">
      <div className="Filter" >
        <select name="filter" onChange={((e) => handleSelectValue(e.target.value))}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory === "All" ? itemsCollumn() : filtered.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))
        }
      </ul>
    </div>
  );
}

export default ShoppingList;
