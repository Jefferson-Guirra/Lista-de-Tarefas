import * as C from './App.styles'
import { useState, useRef, useEffect } from 'react'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'
import { ProgressBar } from './components/ProgressBar'
import { Message } from './components/Message'

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar Pão', done: false }
  ])
  const textMessage = useRef(false)

  const handleTaskName = (TaskName: string) => {
    setList([...list, { id: list.length + 1, name: TaskName, done: false }])
  }

  const excludeItemList = (value: number) => {
    setList(list =>
      list
        .filter((item, index) => index !== value)
        .map((item, index) => {
          item.id = index + 1
          return item
        })
    )
  }

  const managerDone = (value: number) => {
    setList(list =>
      list.map(item => {
        if (item.id === value + 1 && item.done === false) {
          item.done = true
          return item
        }
        if (item.id === value + 1 && item.done === true) {
          item.done = false

          return item
        }
        return item
      })
    )
  }
  return (
    <C.Container>
      <Message
        item={list[list.length - 1]}
        list={list}
        textMessage={textMessage.current}
      />
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <ProgressBar list={list} />
        <AddArea addList={handleTaskName} />
        {list.map((item, index) => (
          <ListItem
            key={index}
            index={index}
            excludeItemList={excludeItemList}
            item={item}
            managerDone={managerDone}
            list={list}
            removedMessage={textMessage}
          />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App
