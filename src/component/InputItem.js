import React from 'react'
import './InputItem.css'

function InputItem({items, addItem, onChange, inputValue}) {

 
  return(
    <div className="item-container">
   
    <input type="text" 
         value={inputValue}
         placeholder="Add New Item..." 
         onChange={(x) => onChange(x)}
          
         />
    <button
      onClick={() => addItem(inputValue)}
    > Add</button>
</div>   
  )
}


export default InputItem;