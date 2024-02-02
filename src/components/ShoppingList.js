import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selected, setSelected] = useState("All");

 function handleFilter(event){
  setSelected (event.target.value);
 }


 const filteredItems = (selected === "All" ? items : items.filter(item => item.category === selected));


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selected} onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
