import * as C from './styles'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { Item } from '../../types/Item'
import Trash from '../../assets/delete.svg'
type Props = {
  item: Item
  index: number
  list:Item[]
  excludeItemList: (index: number) => void
  managerDone : (value:number) => void
  
}

export const ListItem = ({ item, index, excludeItemList,managerDone,list}: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      managerDone(index)
      
      setIsChecked(e.target.checked)
  }
 
  useEffect(()=>{
    setIsChecked(item.done)
  },[list])
  
  return (
    <C.Container done={isChecked}>
      <label htmlFor={item.id + ''}>
        <input
          type="checkbox"
          checked={isChecked}
          id={item.name}
          onChange={handleChange}
        />
        {item.name}
      </label>
      <button onClick={()=> excludeItemList(index)} className="excludeItem">
        <img src={Trash} alt="Delete" />
      </button>
    </C.Container>
  )
}
