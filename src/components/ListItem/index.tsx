import * as C from './styles'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { Item } from '../../types/Item'
import Trash from '../../assets/delete.svg'
type Props = {
  item: Item
  index: number
  excludeItemList: (index: number) => void
  managerDone : (value:number) => void
  
}

export const ListItem = ({ item, index, excludeItemList,managerDone}: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      managerDone(index)
  }

  useEffect(()=>{
    setIsChecked(item.done)
  },[item.done])
  
  return (
    <C.Container done={isChecked}>
      <label htmlFor={item.name}>
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
