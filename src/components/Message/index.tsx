import * as C from './styles'
import { Item } from '../../types/Item'
import { useEffect, useState, useRef } from 'react'
import Award from '../../assets/award.svg'

type Props = {
  item: Item
  list: Item[]
  textMessage: boolean
}

export const Message = ({ item, list, textMessage }: Props) => {
  const [cardMessage, setCardMessage] = useState(false)
  const completedList = list.filter(item=> item.done === true)
  let completed = false
  completed = completedList.length === list.length ? true : false

  useEffect(() => {
    setCardMessage(true)
    setTimeout(() => {
      setCardMessage(false)
    }, 2000)
  }, [list.length])
  
  return (
    <C.Container  completedList={completed} textMessage={textMessage} message={cardMessage}>
      <div className={'completed'}>
        <p>Lista completa</p>
        <span>
          <img src={Award} alt="" />
          </span>
      </div>
      <div className="content">
        <p>Tarefa {textMessage ? 'Adicionada' : 'Excluída'}</p>
        <span>
          
        </span>
      </div>
    </C.Container>
  )
}
