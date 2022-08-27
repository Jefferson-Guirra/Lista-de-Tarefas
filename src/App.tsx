import * as C from './App.styles'
import { useState,useCallback } from 'react'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'
import { ProgressBar } from './components/ProgressBar'

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Fazer Caminhada', done: false }
  ])

  const handleTaskName = (TaskName: string) => {
    setList([...list, { id: list.length + 1, name: TaskName, done: false }])
  }

  const excludeItemList = (value: number) => {
    setList(list => {
      return list.filter((item, index) => index !== value)
    })
  }

  const managerDone = (value:number) =>{
    setList((list)=> list.map(item=>{
      if(item.id === value + 1 && item.done === false){
        item.done = true
        return item
      }
      if (item.id === value + 1 && item.done !== false) {
        item.done = false
        return item
      }
        return item
      
    }))
  }



  return (
    <C.Container>
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
          />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App
