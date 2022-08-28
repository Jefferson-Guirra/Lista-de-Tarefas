import * as C from './styles'
import { Item } from '../../types/Item'
import { useEffect, useState, useRef } from 'react'

type Props = {
  item: Item
  list: Item[]
  textMessage: boolean
}
/*{
  list.length > 0 && item.name
}*/
export const Message = ({ item, list, textMessage }: Props) => {
  const [message, setMessage] = useState(true)
  useEffect(() => {
    setMessage(false)
    setTimeout(() => {
      setMessage(true)
    }, 2000)
  }, [list.length])
  return (
    <C.Container textMessage={textMessage} message={message}>
      <div className='content'>
        <p>
          Tarefa {' '}
          {textMessage ? 'excluida' : 'adicionada'}
        </p>
        <span></span>
      </div>
    </C.Container>
  )
}
