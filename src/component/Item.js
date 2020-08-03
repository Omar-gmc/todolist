import React, {useState} from 'react'

import './Item.css'

function Item({item, deleteItem}) {
  const [checkBoxValue, setCheckBoxValue] = useState(false)
      
    return (
        <div className="item_container">
                <input type="checkbox" 
                 onChange={() => setCheckBoxValue(!checkBoxValue)}
                />
               {
                 checkBoxValue === true ?
                 <p contentEditable="true"
                 className="through"
                >{item.itemName}</p>
                :
                <p contentEditable="true"
                >{item.itemName}</p>
               }
              
                
                
                <i className="fa fa-trash" 
                   onClick= {() => deleteItem(item.itemName)}
                   
                ></i>
                
        </div>
    )
}


export default Item