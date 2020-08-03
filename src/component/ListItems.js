import React,{ useEffect }  from 'react'
import Item from './Item'



function ListItems({items, deleteItem}) {

    return(
        items.map((item, index) => <Item
            key={index}
            item={item}
            deleteItem = {deleteItem}
           /> )
    )
}
   

    

export default ListItems;
