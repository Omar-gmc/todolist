import React , {useState, useEffect } from 'react';
import './App.css';
import InputItem from './component/InputItem';
import ListItems from './component/ListItems';



function App(props)  {
    
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')
      
    
    


  function addItem(e) {

    setItems([...items, {
      id: items.length,
      itemName: e
    }])
    setInputValue('')
}

function changeInputValue(e) {
  setInputValue(e.target.value)
}

    function deleteItem(key) {
      const filteredItems = items.filter(item => item.itemName !== key )
        setItems(filteredItems)
 
       }
  
  
    return (
    <div className="app">
    <InputItem items={items}
       addItem={addItem}
       onChange = {changeInputValue}
       inputValue={inputValue}
    />
    <ListItems items={items}
       deleteItem = {deleteItem}/>
 </div>
  


  );

}

export default App;
