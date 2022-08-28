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
  const textMessage = useRef(true)

  const addListFromLocalStorage = () => {
    const listLocalStorage = JSON.parse(
      window.localStorage.getItem('list') || '{}'
    )
    setList(listLocalStorage)
  }

  useEffect(() => {
    const cloneList = JSON.parse(window.localStorage.getItem('list') || '{}')
    if (cloneList.length) addListFromLocalStorage()
    // quando cloneList não tiver nenhum item, ao recarregar a pagina a lista tera o item comprar pão como item inicial.
  }, [])

  const handleTaskName = (TaskName: string) => {
    const cloneList = [
      ...list,
      { id: list.length + 1, name: TaskName, done: false }
    ]
    window.localStorage.setItem('list', JSON.stringify(cloneList))

    setList([...list, { id: list.length + 1, name: TaskName, done: false }])
  }

  const excludeItemList = (value: number) => {
    const cloneList = list
      .filter((item, index) => index !== value)
      .map((item, index) => {
        item.id = index + 1
        return item
      })
    window.localStorage.setItem('list', JSON.stringify(cloneList))

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
    window.localStorage.setItem('list', JSON.stringify(list))
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
        {list.map((item: Item, index: number) => (
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
