import { useEffect, useState } from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'
import Debouce from '../../helper/debounce'

type Props = {
  list: Item[]
}

export const ProgressBar = ({ list }: Props) => {
  const containerProgress = document.querySelector(
    '.progressContainer'
  ) as HTMLDivElement
  const [resize, setResize] = useState(false) // Renderizar o componente no resize
  let newArray: number[] = [] // Armazenar tarefas concluidas

  const progressResize = () => {
    list.forEach((item, index) => {
      if (item.done === true) {
        newArray.push(item.id)
      }
    })

    let sizeProgress: number =
      containerProgress !== null && list.length > 0
        ? (containerProgress.clientWidth / list.length) * newArray.length
        : 0
    if (sizeProgress !== 0) {
      sizeProgress = sizeProgress - 19.2 // 19.2 === padding do container
    }

    return sizeProgress
  }

  window.addEventListener(
    'resize',
    Debouce(() => {
      progressResize()
      setResize(state => !state)
    }, 200)
  )
  return (
    <C.Container size={progressResize()} className="progressContainer">
      <h3>Progresso</h3>
      <span></span>
    </C.Container>
  )
}
