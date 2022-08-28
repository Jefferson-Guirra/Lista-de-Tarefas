import * as C from './styles'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { Item } from '../../types/Item'
import Trash from '../../assets/delete.svg'
type Ref = {
  current:boolean
}
type Props = {
  item: Item
  index: number
  list: Item[]
  removedMessage: Ref
  excludeItemList: (index: number) => void
  managerDone: (value: number) => void
}

export const ListItem = ({ item, index, excludeItemList,managerDone,removedMessage,list}: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      managerDone(index)
      
      setIsChecked(e.target.checked)
  }

  const handleExclude= (e:React.MouseEvent<HTMLElement>)=>{
    excludeItemList(index)
      removedMessage.current = true
        setTimeout(() => {
          removedMessage.current = false
        }, 500)
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
      <button onClick={handleExclude} className="excludeItem">
        <img src={Trash} alt="Delete" />
      </button>
    </C.Container>
  )
}
